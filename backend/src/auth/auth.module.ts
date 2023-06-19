import { Module } from '@nestjs/common';
import { AzureStrategy } from './azure.strategy';

@Module({
  providers: [AzureStrategy],
  exports: [AzureStrategy],
})
export class AuthModule {}
