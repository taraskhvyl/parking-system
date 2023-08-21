import {Controller, Get, HttpStatus, Logger} from '@nestjs/common';
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly logger: Logger) {

    }

    @Get('me')
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    async getMyProfile()
    {

    }
}
