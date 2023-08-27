import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { SharedModule } from '@app/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
