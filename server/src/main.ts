import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule} from "nest-winston";
import {createLogger} from "winston";

async function bootstrap() {
  const instance = createLogger({
    // options of Winston
  });

  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: WinstonModule.createLogger({
      instance,
    }),
  });

  await app.listen(3000);
}
bootstrap();
