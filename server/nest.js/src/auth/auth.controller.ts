import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth.guard';

@ApiTags('auth')
@Controller({
  version: '1',
  path: 'auth',
})
export class AuthController {
  @UseGuards(JwtAuthGuard)
  @Get('status')
  getAuthStatus(@Request() req) {
    return req.user;
  }
}
