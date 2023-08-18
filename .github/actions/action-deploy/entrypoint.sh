#!/bin/sh -l
# fix workarround
export AWS_EC2_METADATA_DISABLED=true

aws s3 cp --recursive $DEPLOY_FROM $DEPLOY_TO$GITHUB_SHA/
aws s3 cp --recursive $DEPLOY_FROM ${DEPLOY_TO}current/
