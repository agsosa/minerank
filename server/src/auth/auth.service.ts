import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/shared/types/entities/Iuser';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

export type JWTUserPayload = Omit<IUser, 'password'>;

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  // Called before generateJWT
  // the result object will be passed to generateJWT as payload
  async validateLocalStrategy(email: string, password: string): Promise<JWTUserPayload | null> {
    const user = await this.userService.findByEmail(email);

    // TODO: Add bcrypt
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  // Called after validateLocalStrategy
  async generateJWT(payload: JWTUserPayload) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);

    const { password, ...result } = user;

    return this.generateJWT(result);
  }
}
