#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkVariableStack } from '../lib/cdk-variable-stack';
import { variables } from '../config/variables';

const app = new cdk.App();

new CdkVariableStack(app, 'CdkVariableStack', {
  env: {
    account: variables.env.account,
    region: variables.env.region
  }
});
