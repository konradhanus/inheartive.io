import { Controller, Get, Request, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Issuer } from 'openid-client';
import { LoginGuard } from './login.guard';

@Controller()
export class AuthController {
  @UseGuards(LoginGuard)
  @Get('/_auth/callback')
  loginCallback(@Res() res: Response) {
    // TODO redirect to caller (frontend or mobile)
    res.redirect('/api/user');
  }

  @UseGuards(LoginGuard)
  @Get('/login')
  login() {
    return;
  }

  @Get('/user')
  user(@Request() req) {
    if (!req.user) {
      throw new UnauthorizedException();
    }
    const { name, email } = req.user.user;
    return {
      name,
      email,
    };
  }

  @Get('/logout')
  async logout(@Request() req, @Res() res: Response) {
    const idToken = req.user ? req.user.id_token : undefined;
    req.session.destroy(async () => {
      const issuer = await Issuer.discover(`${process.env.OIDC_PROVIDER}/.well-known/openid-configuration`);
      const logoutPath = issuer.metadata.end_session_endpoint;
      if (logoutPath) {
        res.redirect(
          // TODO adjust to Azure AD
          `${logoutPath}?post_logout_redirect_uri=${process.env.OIDC_LOGOUT_REDIRECT_URI}${
            idToken ? `&id_token_hint=${idToken}` : ''
          }`
        );
      }
      // TODO redirect to caller (frontend or mobile)
      res.redirect('/api/');
    });
  }
}
