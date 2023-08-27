import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  @Post('signup')
  async signUp() {}
}
