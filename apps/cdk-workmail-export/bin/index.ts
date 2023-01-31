#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { MailboxExportService } from '../lib/mailbox-export-service'
import config from '../config'

const app = new cdk.App()

new MailboxExportService(app, 'MailboxExportService', config)
