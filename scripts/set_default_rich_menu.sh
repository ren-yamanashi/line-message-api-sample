#!/bin/bash

source ./.env

curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/$RICH_MENU_ID_A \
-H "Authorization: Bearer $CHANNEL_ACCESS_TOKEN" \
-H 'Content-Length: 0'