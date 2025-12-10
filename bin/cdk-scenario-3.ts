#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkScenario3Stack } from "../lib/cdk-scenario-3-stack";
import { Stack2 } from "../lib/stack-2";

const app = new cdk.App();

// Stack 1 → Region: ap-south-1
new CdkScenario3Stack(app, "CdkScenario3Stack", {
  env: { region: "ap-south-1" },
});

// Stack 2 → Region: us-east-1
new Stack2(app, "Stack2", {
  env: { region: "us-east-1" },
});
