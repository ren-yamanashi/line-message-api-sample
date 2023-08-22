import { BasicLineRequestMessage } from './types/lineRequestEvent';

export const createRequestMsg = (req: BasicLineRequestMessage): string => {
  return JSON.stringify({
    replyToken: req.replyToken,
    messages: [
      {
        type: 'text',
        text: `You said ${req.message.text}`,
      },
      {
        type: 'text',
        text: 'May I help you?',
      },
    ],
  });
};

// TODO: ドキュメントリンクを載せる
export const requestHeader = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + process.env.CHANNEL_ACCESS_TOKEN,
};
