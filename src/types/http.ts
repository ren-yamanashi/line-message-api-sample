export const HTTP_METHOD = {
  POST: 'POST',
} as const;

export type HttpMethod = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];

export type HttpHeader = {
  'Content-Type': string;
  Authorization: string;
};

export type HttpRequestOptions = {
  hostname: string;
  path: string;
  method: HttpMethod;
  headers: HttpHeader;
  body: string;
};
