import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AzureADGuard } from 'src/auth/azure.strategy';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AzureADGuard)
  getData() {
    return this.appService.getData();
  }
}
