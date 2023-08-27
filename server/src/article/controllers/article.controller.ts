import { Controller, Get, Param, Query } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { ApiOperation } from '@nestjs/swagger';
import { PaginationParamsDto } from '@app/shared/dtos/pagination-params.dto';
import { AppLogger } from '@app/shared/logger/logger.service';

@Controller('articles')
export class ArticleController {
  constructor(
    private readonly articleService: ArticleService,
    private readonly logger: AppLogger,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all articles' })
  async getArticles(@Query() query: PaginationParamsDto) {
    this.logger.log(
      `Getting all articles with pagination params ${JSON.stringify(query)}`,
    );

    return await this.articleService.getArticles();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single article' })
  async getArticle(@Param() id: number) {
    this.logger.log(`Getting article with id ${id}`);

    return await this.articleService.getArticle(id);
  }
}
