import { Request } from 'express';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { StateStoreStoreCallback, StateStoreVerifyCallback, Strategy, VerifyCallback } from 'passport-oauth2';
import { parseJwtData } from './utils/jwt';

@Injectable()
export class Oauth2Strategy extends PassportStrategy(Strategy, 'ouath2') {
  constructor(private readonly configService: ConfigService) {
    super({
      authorizationURL: configService.get<string>('OAUTH2_AUTHORIZATION_URL'),
      tokenURL: configService.get<string>('OAUTH2_TOKEN_URL'),
      callbackURL: configService.get<string>('OAUTH2_CALLBACK_URL'),
      clientID: configService.get<string>('OAUTH2_CLIENT_ID'),
      clientSecret: configService.get<string>('OAUTH2_CLIENT_SECRET'),
      scope: configService.get<string>('OAUTH2_SCOPE'),
      /**
       * Here is null store adapter to ignore all session-related things from OAuth provider. In passport-oauth2 package
       * by default session is stored via express-session. With session our app can't be easily scaled and this session
       * data we don't use anymore. It's only to tell us "who has logged in" and next we'll carry everything internally
       * using JWT (check auth.controller.ts file how we deal with OAuth2 callback response).
       */
      store: {
        store: (req: Request, callback: StateStoreStoreCallback) => callback(null, randomUUID()),
        verify: (req: Request, state: string, callback: StateStoreVerifyCallback) => callback(null, true, state),
      },
    });
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: void,
    callback: VerifyCallback
  ): { name: string; username: string; email: string } {
    const { name, preferred_username, email } = parseJwtData(accessToken);
    const payload = { name, username: preferred_username, email };
    callback(null, payload);
    return payload;
  }
}
