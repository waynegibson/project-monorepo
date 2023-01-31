import * as cdk from 'aws-cdk-lib'
import type { Construct } from 'constructs'
import * as iam from 'aws-cdk-lib/aws-iam'

export interface ExportRoleProps extends cdk.StackProps {
  readonly account: string
  readonly region: string
  readonly organizationId: string
  readonly bucketName: string
  readonly kmsKeyArn: string
}

export class ExportRole extends cdk.Stack {
  readonly role: iam.Role

  constructor(scope: Construct, id: string, props: ExportRoleProps) {
    super(scope, id, props)

    const { account, region, organizationId, bucketName, kmsKeyArn } = props

    // create the workmail trust policy
    const assumedByService = new iam.ServicePrincipal('export.workmail.amazonaws.com')
      .withConditions({
        StringEquals: {
          'aws:SourceAccount': `${account}`,
        },
        ArnLike: {
          'aws:SourceArn': `arn:aws:workmail:${region}:${account}:organization/${organizationId}`,
        },
      })

    // create the s3 bucket export policy
    const exportBucketPolicy = new iam.PolicyStatement({
      actions: [
        's3:AbortMultipartUpload',
        's3:PutObject',
        's3:GetBucketPolicyStatus',
      ],
      resources: [
        `arn:aws:s3:::${bucketName}`,
        `arn:aws:s3:::${bucketName}/*`,
      ],
    })

    // create the kms decrypt policy
    const exportKmsPolicy = new iam.PolicyStatement({
      actions: ['kms:Decrypt', 'kms:GenerateDataKey'],
      resources: [kmsKeyArn],
      conditions: {
        StringEquals: {
          'kms:ViaService': `s3.${region}.amazonaws.com`,
        },
        StringLike: {
          'kms:EncryptionContext:aws:s3:arn': `arn:aws:s3:::${bucketName}/mailbox-export*`,
        },
      },
    })

    // create the workmail mailbox export role
    this.role = new iam.Role(this, 'Role', {
      assumedBy: assumedByService, // this attaches the trust policy to the role first.
      description: 'IAM policy that grants permission to write to the Amazon S3 bucket and encrypt the sent files with the AWS KMS key.',
      inlinePolicies: {
        MailboxExport: new iam.PolicyDocument({
          statements: [exportBucketPolicy, exportKmsPolicy],
        }),
      },
    })

    new cdk.CfnOutput(this, 'WorkmailExportRoleName', {
      value: this.role.roleName,
      description: 'AWS Identity and Access Management (IAM) role to export mailbox content for an Amazon Workmail organization.',
    })

    new cdk.CfnOutput(this, 'WorkmailExportRoleArn', {
      value: this.role.roleArn,
      description: 'AWS Identity and Access Management (IAM) role to export mailbox content for an Amazon Workmail organization.',
    })
  }
}
