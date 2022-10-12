import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { buildOpenIdClient, OidcStrategy } from './oidc.strategy';
import { SessionSerializer } from './session.serializer';

const OidcStrategyFactory = {
  provide: 'OidcStrategy',
  useFactory: async (authService: AuthService) => {
    const client = await buildOpenIdClient();
    return new OidcStrategy(authService, client);
  },
  inject: [AuthService],
};

@Module({
  controllers: [AuthController],
  providers: [OidcStrategyFactory, SessionSerializer, AuthService],
  imports: [PassportModule.register({ session: true, defaultStrategy: 'oidc' })],
})
export class AuthModule {}
