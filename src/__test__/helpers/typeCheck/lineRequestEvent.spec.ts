import { isLineRequestEvent, isTextMessage } from '../../../helpers/typeCheck/lineRequestEvent';

describe('isLineRequestEvent', () => {
  it('有効な LineRequestEvent に対して true を返す', () => {
    const validEvent = {
      destination: 'destinationString',
      events: [
        {
          type: 'someType',
          message: {
            id: 'someId',
            type: 'text',
            text: 'abc',
          },
          timestamp: 123456789,
          replyToken: 'replyTokenString',
          mode: 'modeString',
          webhookEventId: 'webhookEventIdString',
          deliveryContext: {
            isRedelivery: true,
          },
        },
      ],
    };

    expect(isLineRequestEvent(validEvent)).toBeTruthy();
  });

  it('宛先(duration)が見つからない場合は false を返す', () => {
    const eventWithoutDestination = {
      events: [
        {
          type: 'someType',
          message: {
            id: 'someId',
            type: 'text',
          },
          timestamp: 123456789,
        },
      ],
    };

    expect(isLineRequestEvent(eventWithoutDestination)).toBeFalsy();
  });

  it('イベントが欠落している場合は false を返す', () => {
    const eventWithoutEvents = {
      destination: 'destinationString',
    };

    expect(isLineRequestEvent(eventWithoutEvents)).toBeFalsy();
  });

  it('無効なメッセージ タイプのイベントの場合は false を返す', () => {
    const invalidMessageTypeEvent = {
      destination: 'destinationString',
      events: [
        {
          type: 'someType',
          message: {
            id: 'someId',
            type: 'invalidType',
          },
          timestamp: 123456789,
        },
      ],
    };

    expect(isLineRequestEvent(invalidMessageTypeEvent)).toBeFalsy();
  });

  it('タイムスタンプが欠落している場合は false を返す', () => {
    const eventWithoutTimestamp = {
      destination: 'destinationString',
      events: [
        {
          type: 'someType',
          message: {
            id: 'someId',
            type: 'text',
          },
        },
      ],
    };

    expect(isLineRequestEvent(eventWithoutTimestamp)).toBeFalsy();
  });

  it('メッセージが見つからない場合は false を返す', () => {
    const eventWithoutMessage = {
      destination: 'destinationString',
      events: [
        {
          type: 'someType',
          timestamp: 123456789,
        },
      ],
    };

    expect(isLineRequestEvent(eventWithoutMessage)).toBeFalsy();
  });
});

describe('isTextMessage', () => {
  it('should return true for valid TextMessage', () => {
    const validTextMessage = {
      id: 'sampleId',
      type: 'text',
      text: 'sample text',
    };

    expect(isTextMessage(validTextMessage)).toBeTruthy();
  });

  it('should return false if id is missing', () => {
    const messageWithoutId = {
      type: 'text',
      text: 'sample text',
    };

    expect(isTextMessage(messageWithoutId)).toBeFalsy();
  });

  it('should return false if type is missing', () => {
    const messageWithoutType = {
      id: 'sampleId',
      text: 'sample text',
    };

    expect(isTextMessage(messageWithoutType)).toBeFalsy();
  });

  it('should return false for invalid type value', () => {
    const invalidTypeValueMessage = {
      id: 'sampleId',
      type: 'invalidType',
      text: 'sample text',
    };

    expect(isTextMessage(invalidTypeValueMessage)).toBeFalsy();
  });

  it('should return false if text is missing', () => {
    const messageWithoutText = {
      id: 'sampleId',
      type: 'text',
    };

    expect(isTextMessage(messageWithoutText)).toBeFalsy();
  });

  it('should return false if arg is not an object', () => {
    const notAnObject = 'just a string';

    expect(isTextMessage(notAnObject)).toBeFalsy();
  });

  it('should return false if arg is null', () => {
    const nullArg = null;

    expect(isTextMessage(nullArg)).toBeFalsy();
  });
});
