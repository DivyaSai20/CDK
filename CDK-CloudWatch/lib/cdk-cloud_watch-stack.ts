import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export class CdkCloudWatchStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 🔹 EC2 CPU Utilization Metric
    const cpuMetric = new cloudwatch.Metric({
      namespace: 'AWS/EC2',
      metricName: 'CPUUtilization',
      statistic: 'Average',
      period: cdk.Duration.minutes(5),
      dimensionsMap: {
        InstanceId: 'i-09971899398183b8a' //
      }
    });

    // 🔹 CloudWatch Alarm
    new cloudwatch.Alarm(this, 'HighCpuAlarm', {
      alarmName: 'High-CPU-Alarm',
      metric: cpuMetric,
      threshold: 70,
      evaluationPeriods: 2,
      comparisonOperator:
        cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      alarmDescription: 'Alarm when EC2 CPU exceeds 70%'
    });
  }
}
