#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { IamStack } from '../lib/Acc682033498567-iam-ap-south-1';
import { S3Stack } from '../lib/Acc682033498567-s3-ap-south-1';

const app = new cdk.App();

// IAM Stack in ap-south-1
new IamStack(app, 'Acc682033498567-iam-ap-south-1', {
  env: {
    account: '682033498567',
    region: 'ap-south-1'
  }
});

// S3 Stack in us-east-1
new S3Stack(app, 'Acc682033498567-s3-us-east-1', {
  env: {
    account: '682033498567',
    region: 'ap-south-1'
  }
});
