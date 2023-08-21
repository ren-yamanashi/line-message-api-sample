import { BasicLineRequestMessage, LineRequestEvent, TextMessage } from 'src/types/lineRequestEvent';

export const isLineRequestEvent = (arg: unknown): arg is LineRequestEvent => {
  if (typeof arg !== 'object' || arg === null) return false;

  const obj = arg as LineRequestEvent;

  if (typeof obj.destination !== 'string') return false;
  if (!Array.isArray(obj.events)) return false;
  for (const event of obj.events) {
    if (!isBasicLineRequestMessage(event)) return false;
  }
  return true;
};

const isBasicLineRequestMessage = (arg: unknown): arg is BasicLineRequestMessage => {
  if (typeof arg !== 'object' || arg === null) return false;

  const msg = arg as BasicLineRequestMessage;

  if (typeof msg.type !== 'string') return false;
  if (typeof msg.timestamp !== 'number') return false;
  if (typeof msg.replyToken !== 'string') return false;
  if (typeof msg.mode !== 'string') return false;
  if (typeof msg.webhookEventId !== 'string') return false;
  if (typeof msg.deliveryContext !== 'object' || msg.deliveryContext === null) return false;
  if (typeof msg.deliveryContext.isRedelivery !== 'boolean') return false;
  if (msg.message && !isTextMessage(msg.message)) return false;
  return true;
};

export const isTextMessage = (arg: unknown): arg is TextMessage => {
  if (typeof arg !== 'object' || arg === null) return false;

  const msg = arg as TextMessage;

  if (typeof msg.id !== 'string') return false;
  if (typeof msg.type !== 'string' || msg.type !== 'text') return false;
  if (typeof msg.text !== 'string') return false;
  return true;
};
