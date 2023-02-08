import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';


export class FusionSubscriberStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    


    
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


  }
}
