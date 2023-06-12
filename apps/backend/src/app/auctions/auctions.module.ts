import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionsService } from './auctions.service';
import { AuctionsController } from './auctions.controller';
import { Auction } from './entities/auction.entity';
import { Category } from '../categories/entities/category.entity';
import { User } from '../users/entities/user.entity';
import { AuctionExistsRule } from './validators/auction-exists';

@Module({
  imports: [TypeOrmModule.forFeature([Auction, Category, User])],
  controllers: [AuctionsController],
  providers: [AuctionsService, AuctionExistsRule],
})
export class AuctionsModule {}
