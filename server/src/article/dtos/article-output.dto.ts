import { ApiProperty } from '@nestjs/swagger';
import { AuthorOutputDto } from '@app/article/dtos/author-output.dto';
import { Type } from 'class-transformer';

export class ArticleOutput {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  @Type(() => AuthorOutputDto)
  author: AuthorOutputDto;
}
