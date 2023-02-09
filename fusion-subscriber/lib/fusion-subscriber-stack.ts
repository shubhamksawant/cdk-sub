import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as dynamo from 'aws-cdk-lib/aws-dynamodb';
import { table } from 'console';



export class FusionSubscriberStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    // super(scope, id, { ...props, removalPolicy: cdk.RemovalPolicy.DESTROY });
  


    
/////////////////// S3 alert bucket  emr ///////////////////////

    // Create the alert S3 bucket
    const myBucket = new s3.Bucket(this, 's3-data-bucket', {
      bucketName: 's3-test-bucket-alert-data',
      versioned: false,
      publicReadAccess: false,
      blockPublicAccess:  s3.BlockPublicAccess.BLOCK_ALL,

      // removalPolicy: cdk.RemovalPolicy.DESTROY,
      // autoDeleteObjects: true,
    });
       
    //    // Add a test folder to the first bucket
    //    firstBucket.addObject('test', {
    //     key: 'test/'
    // });

 
/////////////////// dynamo db table ///////////////////////

const table = new dynamo.Table(this, 'AlertDataDynamoDB', {
  partitionKey: {
    name: 'id',
    type: dynamo.AttributeType.STRING

  },
  // replicationRegions: ['us-east-1', 'us-east-2', 'us-west-2'],
  // replicationTimeout: Duration.hours(2), // defaults to Duration.minutes(30)

  //   table.autoScaleWriteCapacity({
  //   minCapacity: 1,
  //   maxCapacity: 10,
  // }).scaleOnUtilization({ targetUtilizationPercent: 75 }),
  // removalPolicy: cdk.RemovalPolicy.DESTROY,
  tableName: 'DynamoDBTable'
});



  }
}
