import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppLoggerModule } from '@app/shared/logger/logger.module';

@Module({
  imports: [ConfigModule.forRoot(), AppLoggerModule],
  exports: [AppLoggerModule, ConfigModule],
})
export class SharedModule {}
