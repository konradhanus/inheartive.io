import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Oauth2Guard } from './oauth2.guard';
import { AuthService } from './auth.service';
import { User } from './types/user';
import { ApiBody, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(Oauth2Guard)
  @Get('_auth/callback')
  loginCallback(@Request() req: any, @Res() res: Response) {
    const token = this.authService.generateJwt(req.user);
    return res.status(200).json({ token, user: req.user });
  }
  // TODO uncomment this guard
  // @UseGuards(Oauth2Guard)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        'email': {
          type: 'string'
        },
        'password': {
          type: 'string'
        }
      }
    }
  })
  @ApiResponse({
    schema: {
      type: 'object',
      properties: {
        'access_token': {
          type: 'string'
        },
        user: {
          type: 'object',
          properties: {
            'id': {
              type: 'string'
            },
            'firstName': {
              type: 'string'
            },
            'lastName': {
              type: 'string'
            },
            'initials': {
              type: 'string'
            }
          }
        }
      }
    }
  })
  @ApiCreatedResponse()
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
