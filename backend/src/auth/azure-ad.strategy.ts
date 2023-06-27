import { Injectable } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';
import { AzureUser } from './types/azure-user';
import { ConfigService } from '@nestjs/config';

const config = {
  metadata: {
    authority: 'login.microsoftonline.com',
    discovery: '.well-known/openid-configuration',
    version: 'v2.0',
  },
  settings: {
    validateIssuer: true,
    passReqToCallback: false,
    loggingLevel: 'info',
  },
};
const EXPOSED_SCOPES = ['Files.Read'];

@Injectable()
export class AzureADStrategy extends PassportStrategy(
  BearerStrategy,
  'azure-ad',
) {
  constructor(private configService: ConfigService) {
    super({
      identityMetadata: `https://${
        config.metadata.authority
      }/${configService.get('AAD_TENANT_ID')}/${config.metadata.version}/${
        config.metadata.discovery
      }`,
      issuer: `https://${config.metadata.authority}/${configService.get(
        'AAD_TENANT_ID',
      )}/${config.metadata.version}`,
      clientID: configService.get('AAD_CLIENT_ID'),
      audience: configService.get('AAD_CLIENT_ID'),
      validateIssuer: config.settings.validateIssuer,
      passReqToCallback: config.settings.passReqToCallback,
      loggingLevel: config.settings.loggingLevel,
      scope: EXPOSED_SCOPES,
      loggingNoPII: false,
    });
  }

  async validate(user: AzureUser): Promise<AzureUser> {
    return user;
  }
}

export const AzureADGuard = AuthGuard('azure-ad');
