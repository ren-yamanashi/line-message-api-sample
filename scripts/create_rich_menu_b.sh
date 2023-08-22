#!/bin/bash

source ./.env

curl -v -X POST https://api.line.me/v2/bot/richmenu \
  -H "Authorization: Bearer $CHANNEL_ACCESS_TOKEN" \
  -H 'Content-Type: application/json' \
  -d \
  '{
    "size": {
      "width": 1200,
      "height": 405
    },
    "selected": false,
    "name": "richmenu-b",
    "chatBarText": "Tap to open",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 400,
          "height": 405
        },
        "action": {
          "type": "richmenuswitch",
          "richMenuAliasId": "richmenu-alias-a",
          "data": "richmenu-changed-to-a"
        }
      },
      {
        "bounds": {
          "x": 400,
          "y": 0,
          "width": 400,
          "height": 405
        },
        "action": {
          "type": "message",
          "label": "b",
          "text": "Hello b"
        }
      },
      {
        "bounds": {
          "x": 800,
          "y": 0,
          "width": 400,
          "height": 405
        },
        "action": {
          "type": "message",
          "label": "c",
          "text": "Hello c"
        }
      }
   ]
}'
