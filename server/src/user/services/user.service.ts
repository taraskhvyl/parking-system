import {Injectable, Logger, Post} from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(private readonly logger: Logger) {
    }

    @Post('signup')
    async signUp() {

    }
}
