import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as elbv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { LambdaTarget } from "aws-cdk-lib/aws-elasticloadbalancingv2-targets";

interface AlbLambdaProps extends cdk.StackProps {
  vpc: ec2.Vpc;
  lambdaFn: lambda.Function;
}

export class AlbLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AlbLambdaProps) {
    super(scope, id, props);

    // Create ALB
    const alb = new elbv2.ApplicationLoadBalancer(this, "MyALB", {
      vpc: props.vpc,
      internetFacing: true,
    });

    // Create Listener
    const listener = alb.addListener("HttpListener", {
      port: 80,
      open: true,
    });

    // Attach Lambda as ALB Target
    listener.addTargets("LambdaTarget", {
      targets: [new LambdaTarget(props.lambdaFn)],
    });

    // Output ALB DNS
    new cdk.CfnOutput(this, "AlbDns", {
      value: alb.loadBalancerDnsName,
    });
  }
}
