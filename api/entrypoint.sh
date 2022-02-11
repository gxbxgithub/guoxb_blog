#!/bin/bash
cp -a ./cms/dist/* ./public/
export NODE_ENV=$1 && node ./src/main.js