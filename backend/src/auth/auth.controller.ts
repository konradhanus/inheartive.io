import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Oauth2Guard } from './oauth2.guard';
import { AuthService } from './auth.service';
import { User } from './types/user';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(Oauth2Guard)
  @Get('_auth/callback')
  loginCallback(@Request() req: any, @Res() res: Response) {
    const token = this.authService.generateJwt(req.user);
    return res.status(200).json({ token, user: req.user });
  }
  // TODO uncomment this guard
  // @UseGuards(Oauth2Guard)
  @Post()
  async login(@Request() req: { body: User }) {
    const { body: user } = req;
    if (user) {
      const validated = await this.authService.validateUser(user);
      if (validated) {
        return this.authService.login(validated);
      }
    }

    return null;
  }
}
