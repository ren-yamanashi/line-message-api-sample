import { createRequestMsg } from '../request';
import { BasicLineRequestMessage } from '../types/lineRequestEvent';

describe('createRequestMsg', () => {
  it('should correctly format the request message', () => {
    const sampleReq: BasicLineRequestMessage = {
      type: 'message',
      message: {
        id: 'sampleId',
        type: 'text',
        text: 'Hello',
      },
      timestamp: 1234567890,
      replyToken: 'sampleReplyToken',
      mode: 'sampleMode',
      webhookEventId: 'sampleEventId',
      deliveryContext: {
        isRedelivery: false,
      },
    };

    const expectedOutput = JSON.stringify({
      replyToken: 'sampleReplyToken',
      messages: [
        {
          type: 'text',
          text: 'You said Hello',
        },
        {
          type: 'text',
          text: 'May I help you?',
        },
      ],
    });

    expect(createRequestMsg(sampleReq)).toEqual(expectedOutput);
  });
});
