import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { Asset } from './entities/asset.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { imageFileFilter } from '../../common/pipes/filters/imageFile.filter';

@Module({
  providers: [AssetsService, ConfigService],
  controllers: [AssetsController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dest: configService.get<string>('ASSET_UPLOAD_PATH'),
        limits: {
          fileSize: parseInt(
            configService.get<string>('ASSET_MAX_UPLOAD_SIZE'),
          ),
        },
        fileFilter: imageFileFilter,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Asset]),
  ],
})
export class AssetsModule {}
