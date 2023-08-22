#!/bin/bash

source ./.env

curl -v -X DELETE https://api.line.me/v2/bot/user/all/richmenu \
-H "`Authorization: Bearer $CHANNEL_ACCESS_TOKEN"