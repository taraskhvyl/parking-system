import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ArticleModule } from './article/article.module';
import { SharedModule } from '@app/shared/shared.module';

@Module({
  imports: [SharedModule, UserModule, OrderModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
