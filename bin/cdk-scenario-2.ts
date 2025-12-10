#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { VpcLambdaStack } from "../lib/cdk-scenario-2-stack";
import { AlbLambdaStack } from "../lib/lambda-alb-stack";

const app = new cdk.App();

// Deploy Stack 1 (VPC + Lambda)
const vpcLambdaStack = new VpcLambdaStack(app, "VpcLambdaStack");

// Deploy Stack 2 (ALB + Lambda Target)
new AlbLambdaStack(app, "AlbLambdaStack", {
  vpc: vpcLambdaStack.vpc,
  lambdaFn: vpcLambdaStack.lambdaFn,
});
