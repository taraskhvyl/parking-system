import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppLogger } from '@app/shared/logger/logger.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly logger: AppLogger) {}

  @Get('me')
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
  })
  async getMyProfile() {}
}
