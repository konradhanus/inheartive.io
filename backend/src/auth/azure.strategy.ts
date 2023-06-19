// azure.strategy.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import {
  BearerStrategy,
  VerifyCallback,
  IBearerStrategyOption,
  ITokenPayload,
} from 'passport-azure-ad';

@Injectable()
export class AzureStrategy extends PassportStrategy(
  BearerStrategy,
  'azure-ad',
) {
  constructor() {
    super({
      identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0/.well-known/openid-configuration`,
      clientID: process.env.AZURE_AD_CLIENT_ID,
      audience: `api://${process.env.AZURE_AD_CLIENT_ID}`,
      isB2C: false,
      validateIssuer: true,
      allowMultiAudiencesInToken: true,
      loggingLevel: 'warn',
      passReqToCallback: false,
    } as IBearerStrategyOption);
  }

  validate(payload: ITokenPayload, done: VerifyCallback): void {
    done(null, { userId: payload.oid }, payload);
  }
}

export class AzureADGuard extends AuthGuard('azure-ad') {}
