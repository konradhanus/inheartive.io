#!/bin/bash

# This script clear cache as first step, next run docker with backend enviroment and at the end run android
nx clear-cache & docker-compose up -d & yarn start:android
