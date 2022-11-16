import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { Oauth2Strategy } from './oauth2.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [Oauth2Strategy, JwtStrategy, AuthService],
  imports: [
    ConfigModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_TOKEN_ALIVE') },
      }),
    }),
  ],
})
export class AuthModule {}
