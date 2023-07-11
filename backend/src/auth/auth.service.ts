import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../app/users/users.service';
import { User } from './types/user';
import * as crypto from 'crypto';
import { hashString } from '../common/utils/stringHasher';
import * as adal from 'adal-node';

const clientId = '4113fbdb-2b60-4cf1-bfa7-c74282f508d2';
const clientSecret = '00a83132-4221-4698-a787-6d679d557a90';
const redirectUri = 'http://localhost:3000/redirect';
const resource = 'http://localhost:3000';

export interface SSOBody {
  code: string;
  state: string;
  session_state: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  generateJwt(user: User) {
    return this.jwtService.sign({ ...user, typ: 'Bearer' });
  }

  async validateUser({ email, password }: User) {
    const user = await this.usersService.findByEmail(email);

    const hashPassword = hashString({ data: password, customSalt: user.salt });

    if (user && hashPassword.hash === user.password) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  async verifySSO(response: SSOBody) {
    try {
      const authorityUrl = 'https://login.microsoftonline.com/common';
      const context = new adal.AuthenticationContext(authorityUrl);
      console.log('context', context);
      // TODO check if user are verified
      await context.acquireTokenWithAuthorizationCode(
        response.code,
        redirectUri,
        resource, // A URI that identifies the resource for which the token is valid.
        clientId,
        clientSecret,
        () => {
          console.log('test');
        },
      );

      console.log('jest ok');
      return true;
    } catch (error) {
      console.error('Błąd weryfikacji kodu:', error);
      return false;
    }
  }

  async login(user: { firstName: string; id: string }) {
    const payload = { username: user.firstName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async loginSSO() {
    const payload = { username: 'Will Smith', sub: '1' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
