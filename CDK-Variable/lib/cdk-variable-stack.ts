import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { variables } from '../config/variables';

export class CdkVariableStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 🔹 VPC
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      cidr: variables.vpc.cidr,
      maxAzs: variables.vpc.maxAzs
    });

    // 🔹 EC2
    const instance = new ec2.Instance(this, 'MyEC2', {
      vpc,
      instanceType: new ec2.InstanceType(variables.ec2.instanceType),
      machineImage: ec2.MachineImage.latestAmazonLinux2023(),
      keyName: variables.ec2.keyName
    });

    cdk.Tags.of(instance).add('Name', variables.ec2.instanceName);

    // 🔹 S3
    new s3.Bucket(this, 'MyBucket', {
      bucketName: variables.s3.bucketName,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
  }
}
