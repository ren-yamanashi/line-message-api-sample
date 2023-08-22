#!/bin/bash

source ./.env

curl -v -X POST https://api.line.me/v2/bot/richmenu \
  -H "Authorization: Bearer $CHANNEL_ACCESS_TOKEN" \
  -H 'Content-Type: application/json' \
  -d \
  '{
    "size": {
      "width": 1200,
      "height": 810
    },
    "selected": true,
    "name": "richmenu-a",
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
          "type": "message",
          "label": "A",
          "text": "Send A"
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
          "label": "B",
          "text": "Send B"
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
          "label": "C",
          "text": "Send C"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 405,
          "width": 400,
          "height": 405
        },
        "action": {
          "type": "message",
          "label": "D",
          "text": "Send D"
        }
      },
      {
        "bounds": {
          "x": 400,
          "y": 405,
          "width": 400,
          "height": 405
        },
        "action": {
          "type": "uri",
          "label": "git hub",
          "uri": "https://github.com/ren-yamanashi"
        }
      },
      {
        "bounds": {
          "x": 800,
          "y": 405,
          "width": 400,
          "height": 405
        },
        "action": {
          "type": "richmenuswitch",
          "richMenuAliasId": "richmenu-alias-b",
          "data": "richmenu-changed-to-b"
        }
      }
   ]
}'
