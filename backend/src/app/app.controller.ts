import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';
import { AppService } from './app.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiExcludeEndpoint()
  @Get()
  getData() {
    return this.appService.getData();
  }
}
