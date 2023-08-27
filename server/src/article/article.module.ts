import { Module } from '@nestjs/common';
import { ArticleController } from './controllers/article.controller';
import { SharedModule } from '@app/shared/shared.module';
import { ArticleService } from '@app/article/services/article.service';

@Module({
  imports: [SharedModule],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
