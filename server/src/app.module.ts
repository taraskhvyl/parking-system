import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import { ConfigModule } from '@nestjs/config';
import {PrismaService} from "./prisma/prisma.service";
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      WinstonModule.forRoot({}),
      UserModule,
      OrderModule,
  ],
  controllers: [AppController],
  providers: [Logger, AppService, PrismaService],
})
export class AppModule {}
