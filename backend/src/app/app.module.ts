import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionsModule } from './auctions/auctions.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { AssetsModule } from './assets/assets.module';
import { UsersModule } from './users/users.module';
import { BidsModule } from './bids/bids.module';
import { AzureADGuard } from 'src/auth/azure.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.dev'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: process.env.MODE === 'dev',
      ssl:
        process.env.MODE === 'prod'
          ? {
              rejectUnauthorized: true,
              ca: process.env.DB_CERT.replace(/\\n/g, '\n'),
            }
          : null,
    }),
    PassportModule,
    AuthModule,
    AuctionsModule,
    CategoriesModule,
    AssetsModule,
    UsersModule,
    BidsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AzureADGuard],
})
export class AppModule {}
