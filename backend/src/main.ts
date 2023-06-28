/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import { useContainer } from 'class-validator';

import { AppModule } from './app/app.module';
import { NotFoundInterceptor } from './app/common/interceptors/not-found.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      forbidNonWhitelisted: false,
      transform: true,
      transformOptions: {
        enableImplicitConversion: false,
      },
    })
  );

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.use(passport.initialize());

  const port = process.env.BACKEND_PORT || 3333;

  app.useGlobalInterceptors(new NotFoundInterceptor());
  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
