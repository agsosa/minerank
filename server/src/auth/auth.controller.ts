import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/auth.jwt.guard';
import { LocalAuthGuard } from './guard/auth.local.guard';

@ApiTags('auth')
@Controller({
  version: '1',
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.generateJWT(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('status')
  getProfile(@Request() req) {
    return req.user;
  }
}
