import * as cdk from 'aws-cdk-lib'
import type { Construct } from 'constructs'
import * as kms from 'aws-cdk-lib/aws-kms'

export interface ExportKmsKeyProps extends cdk.StackProps {
  /**
   * AWS KMS key alias.
   *
   * @default 'mailbox-export-key'
   */
  readonly alias?: string
}

export class ExportKmsKey extends cdk.Stack {
  readonly kmsKey: kms.Key

  constructor(scope: Construct, id: string, props?: ExportKmsKeyProps) {
    super(scope, id, props)

    const alias = props?.alias ?? 'mailbox-export-key'

    const exportKey = new kms.Key(this, 'KmsKey')
    exportKey.addAlias(alias)

    this.kmsKey = exportKey
  }
}
