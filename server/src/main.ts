import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  // Versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Validations
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // Swagger docs
  const config = new DocumentBuilder()
    .setTitle('Mineranks API')
    .setDescription('The Mineranks API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/help', app, document);

  await app.listen(3030);
})();
