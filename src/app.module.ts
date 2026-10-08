import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DummyService } from './dummy/dummy.service.js';
import { MessageFormatterService } from './message-formatter/message-formatter.service.js';
import { LoggerService } from './logger/logger.service.js';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DummyService, MessageFormatterService, LoggerService],
})
export class AppModule {}