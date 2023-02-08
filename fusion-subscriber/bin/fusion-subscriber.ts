#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FusionSubscriberStack } from '../lib/fusion-subscriber-stack';

const app = new cdk.App();
new FusionSubscriberStack(app, 'FusionSubscriberStack');
