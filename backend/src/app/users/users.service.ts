import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { hashString } from '../../common/utils/stringHasher';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const initials = `${createUserDto.firstName[0]}${createUserDto.lastName[0]}`;

    const hashPassword = hashString({ data: createUserDto.password });

    const user = this.userRepository.create({
      ...createUserDto,
      initials,
      salt: hashPassword.salt,
      password: hashPassword.hash,
    });

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find({
      take: 50,
      order: {
        createdAt: 'DESC',
      },
    });
  }

  findOne(id: string) {
    return this.userRepository.findOneOrFail({ where: { id }, relations: ['auctions'] });
  }
  findByEmail(email: string) {
    return this.userRepository.findOneOrFail({ where: { email }, relations: ['auctions'] });
  }

  static parse(user: User): UserDto {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      initials: user.initials,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
