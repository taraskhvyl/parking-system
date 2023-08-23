import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule} from "nest-winston";
import {createLogger} from "winston";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const instance = createLogger({});

  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: WinstonModule.createLogger({
      instance,
    }),
  });

  const config = new DocumentBuilder()
      .setTitle('Parking System')
      .setDescription('FullStack System for booking parking places')
      .setVersion('1.0')
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableShutdownHooks();

  await app.listen(3000);
}
bootstrap();
