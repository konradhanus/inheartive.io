import { Injectable } from '@nestjs/common';
import { CreateUserBody } from './dto/create-user.dto';
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

  async create(createUserData: CreateUserBody): Promise<User> {
    const initials = `${createUserData.firstName[0]}${createUserData.lastName[0]}`;

    const hashPassword = hashString({ data: createUserData.password });

    const user = this.userRepository.create({
      ...createUserData,
      initials,
      salt: hashPassword.salt,
      password: hashPassword.hash,
    });

    return this.userRepository.save(user);
  }

  async createWithoutPassword(email: string, nameSurname: string): Promise<User> {
    const nameSurnameArray = nameSurname.split(' ')
    const firstName = nameSurnameArray[0];
    const lastName = nameSurnameArray[1];
    const initials = `${firstName[0]}${lastName[0]}`
    const user = this.userRepository.create({
      firstName,
      lastName,
      email,
      initials,
      password: null,
      salt: null,
    })

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({
      take: 50,
      order: {
        createdAt: 'DESC',
      },
    });
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOneOrFail({ where: { id }, relations: ['auctions'] });
  }
  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOneOrFail({ where: { email }, relations: ['auctions'] });
  }

  static toUserDto(user: User): UserDto {
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
