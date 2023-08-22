#!/bin/bash

source ./.env

curl -v -X DELETE https://api.line.me/v2/bot/richmenu/$RICH_MENU_ID_A \
-H "Authorization: Bearer $CHANNEL_ACCESS_TOKEN"