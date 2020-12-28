import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 이상한 값은 Validator에 도달하지 않음
      forbidNonWhitelisted: true, // 이상한 요청이 오면 요청을 막아버림
      transform: true, // 유저가 보낸 값을 실제 원하는 타입으로 변경
    }),
  );
  await app.listen(3000);
}
bootstrap();
