import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidsService } from './bids.service';
import { BidsController } from './bids.controller';
import { Bid } from '../bids/entities/bid.entity';
import { Auction } from '../auctions/entities/auction.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bid, Auction, User])],
  providers: [BidsService],
  controllers: [BidsController],
})
export class BidsModule {}
