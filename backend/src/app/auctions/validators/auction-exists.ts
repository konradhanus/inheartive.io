import { Injectable, Logger } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { AuctionsService } from '../auctions.service';

@ValidatorConstraint({ name: 'AuctionExists', async: true })
@Injectable()
export class AuctionExistsRule implements ValidatorConstraintInterface {
  private readonly logger = new Logger(AuctionExistsRule.name);

  constructor(protected readonly auctionsService: AuctionsService) {}

  async validate(id: string) {
    try {
      console.log(id);
      await this.auctionsService.findOne(id);
    } catch (err) {
      this.logger.error(err);
      return false;
    }

    return true;
  }

  defaultMessage() {
    return `Auction doesn't exist`;
  }
}
