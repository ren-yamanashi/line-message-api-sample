# 仕様書

- [LINE Messaging API 公式ドキュメント](https://developers.line.biz/ja/reference/messaging-api/)
- [Node.js + express で作成する チュートリアル](https://developers.line.biz/ja/docs/messaging-api/nodejs-sample/#before-starting)
  <br />
  <br />

# 備考

このプロジェクトは、サーバーをデプロイする手順は示していません。  
[Heroku](https://jp.heroku.com/)や [Render](https://render.com/)などを使用して、作成したサーバーをデプロイしてください。

[デプロイ後の手順(Webhook の設定など)](https://developers.line.biz/ja/docs/messaging-api/nodejs-sample/#prepare-channel)

<br />
<br />

# 初期起動

### 0. Git からダウンロード

```bash
git clone https://github.com/ren-yamanashi/line-messaging-api-sample.git
```

### 1. パッケージインストール

```bash
yarn
# or
yarn install
```

### 2. .env 作成

.env の値は個人で設定  
(.env の`CHANNEL_ACCESS_TOKEN`は、作成した公式ラインのチャネルアクセストークンにする)

```bash
cp .default.env .env
```

### 3. サーバー立ち上げ

```bash
yarn start
# or
yarn start:watch
```

<br />
<br />

# リッチメニューの設定

0. 以下の手順に沿って公式アカウントを作成する

[LINE 公式アカウント作成方法](https://developers.line.biz/ja/docs/messaging-api/getting-started/)

1. リッチメニューを作成

以下のコマンドで作成したリッチメニュー A の Id を.env ファイルの`RICH_MENU_ID_A`に設定します

```bash
# request
make create_rich_menu_a

# response
"{'richMenuId': '************'}"
```

2. リッチメニュー A に画像をアップロード

```bash

# request
make upload_rich_menu_img_a
# response
"{}"
```

3. リッチメニュー B を作成

以下のコマンドで作成したリッチメニューの Id を.env ファイルの`RICH_MENU_ID_B`に設定します

```bash
# request
make create_rich_menu_b

# response
"{'richMenuId': '************'}"
```

4. リッチメニュー B に画像をアップロード

```bash

# request
make upload_rich_menu_img_b
# response
"{}"
```

3. デフォルトのリッチメニューを設定(リッチメニュー A をデフォルトにする)

```bash
# request
make set_default_rich_menu

# response
"{}"
```

4. リッチメニュー A のエイリアスを作成する

```bash
# request
make create_rich_menu_alias_a
# response
"{}"
```

5. リッチメニュー B のエイリアスを作成する

```bash
# request
make create_rich_menu_alias_b
# response
"{}"
```

7. リッチメニューを削除する(全てのリッチメニューが削除されます)

```bash
# request
make delete_rich_menu
# response
"{}"
```

8. デフォルトのリッチメニューを解除する(デフォルトのリッチメニュー A を解除する)

```bash
# request
make cancel_default_rich_menu
# response
"{}"
```
