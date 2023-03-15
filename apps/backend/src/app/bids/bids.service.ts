import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from './entities/bid.entity';
import { CreateBidDto } from './dto/create-bid.dto';
@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Bid)
    private bidsRepository: Repository<Bid>
  ) {}

  create(createBidDto: CreateBidDto) {
    const bid = this.bidsRepository.create(createBidDto);

    return this.bidsRepository.save(bid);
  }

  findAll() {
    return this.bidsRepository.find();
  }
}
