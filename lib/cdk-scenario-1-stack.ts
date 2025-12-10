import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";

export class CdkScenario1Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ---------------------------------------------------------
    // 1️⃣ CREATE VPC
    // ---------------------------------------------------------
    const vpc = new ec2.Vpc(this, "CdkVPC", {
      maxAzs: 2, // Public + private subnets in 2 AZs
    });

    // ---------------------------------------------------------
    // 2️⃣ CREATE S3 BUCKET
    // ---------------------------------------------------------
    const bucket = new s3.Bucket(this, "MyDemoBucket", {
      bucketName: "cdk-scenario1-1210",
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // ---------------------------------------------------------
    // 3️⃣ CREATE SECURITY GROUP FOR EC2 (Allow SSH)
    // ---------------------------------------------------------
    const ec2SG = new ec2.SecurityGroup(this, "EC2SecurityGroup", {
      vpc,
      description: "Allow SSH for EC2",
      allowAllOutbound: true,
    });

    ec2SG.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(22),
      "Allow SSH access"
    );

    // ---------------------------------------------------------
    // 4️⃣ CREATE EC2 INSTANCE
    // ---------------------------------------------------------
    new ec2.Instance(this, "MyEC2Instance", {
      vpc,
      instanceType: new ec2.InstanceType("t3.micro"), // Free tier
      machineImage: ec2.MachineImage.latestAmazonLinux2023(),
      securityGroup: ec2SG,
    });
  }
}
