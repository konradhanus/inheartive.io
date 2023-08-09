import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../app/users/users.service';
import { User } from './types/user';
import { User as UserEntity } from 'src/app/users/entities/user.entity';
import { hashString } from '../common/utils/stringHasher';
import { UserDto } from 'src/app/users/dto/user.dto';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

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

  async login(user: { firstName: string; id: string; lastName: string; initials: string }) {
    const payload = { username: user.firstName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        initials: user.initials,
      },
    };
  }

  async getUserOrCreateIfNotExisted(email: string, nameSurname: string): Promise<UserEntity> {
    var user: UserEntity = await this.usersService.findByEmail(email).catch((error) => {
      if (error instanceof EntityNotFoundError) {
        return null;
      } else {
        throw error;
      }
    });

    if(!user) {
      user = await this.usersService.createWithoutPassword(email, nameSurname);
    }

    return user;
  }

  static toUserDto(user: UserEntity): UserDto {
    return UsersService.toUserDto(user);
  }
}
