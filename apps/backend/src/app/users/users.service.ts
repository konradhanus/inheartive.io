import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { hashString } from './utils/stringHasher';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const initials = `${createUserDto.firstName[0]}${createUserDto.lastName[0]}`;

    const hashPassword = hashString({ toHash: createUserDto.password });

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
}
