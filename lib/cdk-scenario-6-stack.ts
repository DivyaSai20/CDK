import * as cdk from 'aws-cdk-lib';
import { aws_dynamodb as dynamodb } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkScenario6Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, 'GlobalDynamoTable', {
      tableName: 'UsersTable',
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,

      partitionKey: {
        name: 'userId',
        type: dynamodb.AttributeType.STRING
      },

      replicationRegions: [
        'us-east-1'  // SECOND REGION FOR REPLICATION
      ]
    });

    new cdk.CfnOutput(this, 'TableName', {
      value: table.tableName
    });
  }
}
