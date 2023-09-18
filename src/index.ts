import https from 'https';
import express, { Request } from 'express';
import { isLineRequestEvent } from './helpers/typeCheck/lineRequestEvent';
import { client } from './config/client';
import { HTTP_METHOD, HttpRequestOptions } from './types/http';
import { requestHeader, createRequestMsg } from './request';

const app = express();

const PORT = 3010;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get('/', (_, res) => {
  console.log('test');
  res.sendStatus(200);
});

app.post('/webhook', function (req: Request) {
  console.log('🚀 ~ file: index.ts:24 ~ req:', req);
  const requestBody: unknown = req.body;
  if (!isLineRequestEvent(requestBody)) return;

  const requestEvent = requestBody.events[0];
  // NOTE: ユーザーがボットにメッセージを送った場合、応答メッセージを送る
  if (requestEvent.type === 'message') {
    const responseMsg = createRequestMsg(requestEvent);

    // TODO: Node.jsのドキュメント通りの型にする
    const webhookOptions: HttpRequestOptions = {
      hostname: client.hostname,
      path: client.path,
      method: HTTP_METHOD.POST,
      headers: requestHeader,
      body: responseMsg,
    };

    // NOTE: リクエストの定義
    const request = https.request(webhookOptions, (res) => {
      res.on('data', (d) => {
        process.stdout.write(d);
      });
    });

    // TODO: エラーハンドリング
    request.on('error', (err) => {
      console.error(err);
    });

    // NOTE: リクエストを送信
    request.write(responseMsg);
    request.end();
  }
});

// TODO: deploy環境の場合はエンドポイントを変える
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
