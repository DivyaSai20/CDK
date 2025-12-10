#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkScenario6Stack } from '../lib/cdk-scenario-6-stack';

const app = new cdk.App();

new CdkScenario6Stack(app, 'DynamoGlobalTableStack', {
  env: {
    account: '682033498567',
    region: 'ap-south-1'  // PRIMARY REGION
  }
});
