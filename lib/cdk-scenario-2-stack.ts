import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class VpcLambdaStack extends cdk.Stack {
  public readonly vpc: ec2.Vpc;
  public readonly lambdaFn: lambda.Function;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create VPC
    this.vpc = new ec2.Vpc(this, "MyVpc", {
      maxAzs: 2,
    });

    // Create Lambda Function
    this.lambdaFn = new lambda.Function(this, "MyLambda", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(`
        exports.handler = async () => {
          return {
            statusCode: 200,
            body: "Hello from Lambda behind ALB!"
          };
        };
      `),
      vpc: this.vpc,
    });
  }
}
