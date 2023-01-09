import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Auction } from '../auctions/entities/auction.entity';
import { UserExistsRule } from './validators/user-exists';

@Module({
  imports: [TypeOrmModule.forFeature([User, Auction])],
  controllers: [UsersController],
  providers: [UsersService, UserExistsRule],
})
export class UsersModule {}
