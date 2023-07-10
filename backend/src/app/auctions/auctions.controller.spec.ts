import { Test, TestingModule } from '@nestjs/testing';
import { AuctionsController } from './auctions.controller';
import { AuctionsService } from './auctions.service';

describe('AuctionsController', () => {
  let controller: AuctionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuctionsController],
      providers: [AuctionsService],
    }).compile();

    controller = module.get<AuctionsController>(AuctionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
