export const parseJwtData = (token: string) => JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
