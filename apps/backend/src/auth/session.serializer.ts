import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserinfoResponse } from 'openid-client';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: UserinfoResponse, done: (err: Error, user: UserinfoResponse) => void): void {
    done(null, user);
  }
  deserializeUser(payload: string, done: (err: Error, payload: string) => void): void {
    done(null, payload);
  }
}
