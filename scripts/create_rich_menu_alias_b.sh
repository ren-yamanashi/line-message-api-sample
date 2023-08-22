#!/bin/bash

source ./.env

curl -v -X POST https://api.line.me/v2/bot/richmenu/alias \
    -H "Authorization: Bearer $CHANNEL_ACCESS_TOKEN" \
    -H 'Content-Type: application/json' \
    -d \
    '{
    "richMenuAliasId": "richmenu-alias-b",
    "richMenuId": "'"$RICH_MENU_ID_B"'"
}'
