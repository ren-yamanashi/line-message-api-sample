export type LineRequestEvent = {
  destination: string;
  events: BasicLineRequestMessage[];
};

/**
 *
 * Request Message
 *
 */
export type BasicLineRequestMessage = {
  type: string;
  // NOTE: 現在はMessageのみ対応
  message: TextMessage;
  timestamp: number;
  source?: LineRequestSource;
  replyToken: string;
  mode: string;
  webhookEventId: string;
  deliveryContext: {
    isRedelivery: boolean;
  };
};

// NOTE: emojis,mentionは省略する
export type TextMessage = {
  id: string;
  type: 'text';
  text: string;
};

/**
 *
 * Request Source
 *
 */
type LineRequestSource = UserSource | GroupTalkSource | RoomSource;

type UserSource = {
  type: string;
  userId: string;
};

// NOTE: OS版LINEまたはAndroid版LINEを使用しているユーザーのみuserIdに含まれる
type GroupTalkSource = {
  type: string;
  groupId: string;
  userId?: string;
};

// NOTE: OS版LINEまたはAndroid版LINEを使用しているユーザーのみuserIdに含まれる
type RoomSource = {
  type: string;
  roomId: string;
  userId?: string;
};
