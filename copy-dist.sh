#!/bin/sh

# Get the only directory inside /app/dist
APP_NAME=$(ls /app/dist)

# Copy the directory to the destination
cp -r "/app/dist/${APP_NAME}"/* /usr/share/nginx/html
