import * as cdk from 'aws-cdk-lib'
import type { Construct } from 'constructs'
import * as s3 from 'aws-cdk-lib/aws-s3'
import type * as kms from 'aws-cdk-lib/aws-kms'

export interface ExportBucketProps extends cdk.StackProps {
  /**
   * AWS KMS customer master key (CMK).
   */
  readonly encryptionKey: kms.Key
  /**
   * Removal policy
   *
   * @default false
   */
  readonly removalPolicy?: boolean
}

export class ExportBucket extends cdk.Stack {
  readonly bucket: s3.Bucket

  constructor(scope: Construct, id: string, props: ExportBucketProps) {
    super(scope, id, props)

    const { encryptionKey, removalPolicy = false } = props

    this.bucket = new s3.Bucket(this, 'S3Bucket', {
      versioned: false,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy:
        removalPolicy === false
          ? cdk.RemovalPolicy.RETAIN
          : cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: removalPolicy,
      encryption: s3.BucketEncryption.KMS,
      encryptionKey,
    })

    new cdk.CfnOutput(this, 'ExportBucketArn', {
      value: this.bucket.bucketArn,
    })

    new cdk.CfnOutput(this, 'ExportBucketName', {
      value: this.bucket.bucketName,
    })
  }
}
