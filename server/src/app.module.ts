import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
      ConfigModule.forRoot(),
      WinstonModule.forRoot({}),
      MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.sawroob.mongodb.net/?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [Logger, AppService],
})
export class AppModule {}
