import { Injectable } from '@nestjs/common';
import { ArticleOutput } from '../dtos/article-output.dto';

@Injectable()
export class ArticleService {
  async getArticles(): Promise<ArticleOutput[]> {
    return [];
  }

  async getArticle(id: number): Promise<ArticleOutput> {
    return null;
  }
}
