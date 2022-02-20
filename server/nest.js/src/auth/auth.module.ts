import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {UserModule} from 'src/user/user.module';
import {AuthService} from './auth.service';
import {LocalStrategy} from './strategy/auth.local.strategy';
import {AuthController} from './auth.controller';
import {authConfig} from './auth.config';
import {JwtStrategy} from './strategy/auth.jwt.strategy';

const jwtModuleOptions = {
    secret: authConfig.jwtSecret,
    signOptions: {expiresIn: authConfig.expiration},
};

@Module({
    imports: [UserModule, PassportModule, JwtModule.register(jwtModuleOptions)],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {
}
