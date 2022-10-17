import { Controller, Get, Request, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Response } from 'express';
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
    req.session.destroy(async () => res.redirect('/api/'));
  }
}
