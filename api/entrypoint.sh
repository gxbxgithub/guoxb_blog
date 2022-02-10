#!/bin/bash
cp -a ./cms/dist/* ./public/
cd ./src
export node main.js