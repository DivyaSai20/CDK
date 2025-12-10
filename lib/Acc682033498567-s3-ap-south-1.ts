import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class S3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const account = props?.env?.account;
    const region = props?.env?.region;

    // Resource naming convention: resource-region
    const bucketName = `bucket-${region}-${account}`;

    new s3.Bucket(this, 'Bucket', {
      bucketName: bucketName,
      versioned: true
    });
  }
}
