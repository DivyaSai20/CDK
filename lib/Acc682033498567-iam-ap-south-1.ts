import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';

export class IamStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const region = props?.env?.region ?? 'ap-south-1';

    // Resource naming convention: resource-region
    const userName = `user-${region}`;

    new iam.User(this, 'User', {
      userName: userName
    });
  }
}
