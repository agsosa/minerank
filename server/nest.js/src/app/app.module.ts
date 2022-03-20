import { Module } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CommunityModule } from 'src/community/community.module';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { GamemodeModule } from 'src/gamemode/gamemode.module';
import { VersionModule } from 'src/version/version.module';
import { TaskModule } from 'src/task/task.module';

const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  cache: true,
};

const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: configService.get<any>('DB_TYPE'),
    host: configService.get<string>('DB_HOST'),
    port: parseInt(configService.get<string>('DB_PORT') || ''),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASS'),
    database: configService.get<string>('DB_NAME'),
    entities: [join(__dirname, '../', '**', '*.entity.{ts,js}')],
    synchronize: true,
    dropSchema: false,
    autoLoadEntities: true,
  }),
  inject: [ConfigService],
};

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    AuthModule,
    CommunityModule,
    UserModule,
    GamemodeModule,
    VersionModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
