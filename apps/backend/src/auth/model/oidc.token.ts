import { UserinfoResponse } from 'openid-client';

export interface OidcToken {
  id_token: string;
  access_token: string;
  refresh_token?: string;
  user: UserinfoResponse;
}
