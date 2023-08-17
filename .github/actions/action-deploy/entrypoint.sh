#!/bin/sh -l

aws s3 cp --recursive $DEPLOY_FROM $DEPLOY_TO$GITHUB_SHA/
aws s3 cp --recursive $DEPLOY_FROM ${DEPLOY_TO}current/
