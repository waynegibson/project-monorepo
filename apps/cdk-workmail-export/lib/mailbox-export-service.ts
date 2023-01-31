import { Construct } from 'constructs'
import { ExportBucket, ExportKmsKey, ExportRole } from './stacks'

export interface MailboxExportServiceProps {
  /**
   * The deployment account and region.
   */
  readonly env: {
    account: string
    region: string
  }
  /**
   * Amazon Workmail organization id. e.g. (m-123456789456789)
   */
  readonly organizationId: string
  /**
   * Deploy for production.
   *
   * @default false
   */
  readonly isProd?: boolean
}

export class MailboxExportService extends Construct {
  constructor(scope: Construct, id: string, props: MailboxExportServiceProps) {
    super(scope, id)

    const { env, organizationId, isProd = false } = props

    const { kmsKey } = new ExportKmsKey(this, 'ExportKmsKey', {
      env,
      description: 'This stack includes resources needed for a AWS KMS customer master key (CMK) that is associated with an S3 bucket to export Amazon Workmail mailbox content.',
    })

    const { bucket } = new ExportBucket(this, 'ExportBucket', {
      env,
      description: 'This stack includes resources needed for an encrypted (AWS KMS CMK) S3 bucket to store exported Amazon Workmail mailbox content.',
      encryptionKey: kmsKey,
      removalPolicy: isProd,
    })

    new ExportRole(this, 'ExportRole', {
      env,
      description: 'This stack includes resources needed for an AWS Identity and Access Management (IAM) role, with a policy that grants for exporting Amazon Workmail mailboxes to an encrypted S3 bucket.',
      account: env.account,
      region: env.region,
      organizationId,
      bucketName: bucket.bucketName,
      kmsKeyArn: kmsKey.keyArn,
    })
  }
}
