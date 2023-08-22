#!/bin/bash

source ./.env
IMAGE_NAME=richmenu-template-guidem-02

curl -v -X POST https://api-data.line.me/v2/bot/richmenu/$RICH_MENU_ID_A/content \
    -H "Authorization: Bearer $CHANNEL_ACCESS_TOKEN" \
    -H "Content-Type: image/jpeg" \
    -T ./images/$IMAGE_NAME.png
