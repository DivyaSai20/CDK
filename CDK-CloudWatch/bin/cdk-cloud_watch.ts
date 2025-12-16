#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkCloudWatchStack } from '../lib/cdk-cloud_watch-stack';

const app = new cdk.App();

new CdkCloudWatchStack(app, 'CdkCloudWatchStack');
