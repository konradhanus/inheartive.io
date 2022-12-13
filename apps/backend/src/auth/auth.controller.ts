import { Controller, Get, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Oauth2Guard } from './oauth2.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(Oauth2Guard)
  @Get('_auth/callback')
  loginCallback(@Request() req, @Res() res: Response) {
    const token = this.authService.generateJwt(req.user);
    return res.status(200).json({ token, user: req.user });
  }

  @UseGuards(Oauth2Guard)
  @Get('login')
  login() {
    return;
  }
}
