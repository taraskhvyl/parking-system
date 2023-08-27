import { ApiProperty } from '@nestjs/swagger';

export class AuthorOutputDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;
}
