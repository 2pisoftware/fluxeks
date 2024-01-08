#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';

const app = new App();
new InfraStack(app, 'InfraStack',
    {
        env: {
            account: process.env.CDK_DEFAULT_ACCOUNT,
            region: "ap-southeast-2"
        }
    }
);
