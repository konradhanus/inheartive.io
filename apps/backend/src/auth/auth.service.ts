import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../app/users/users.service';
import { User } from './types/user';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  generateJwt(user: User) {
    return this.jwtService.sign({ ...user, typ: 'Bearer' });
  }

  async validateUser(email: string) {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: { firstName: string; id: string }) {
    const payload = { username: user.firstName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
