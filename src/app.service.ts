import { Injectable } from '@nestjs/common';
import { DummyService } from './dummy/dummy.service.js';
import { LoggerService } from './logger/logger.service.js';
@Injectable()
export class AppService {
  constructor(
    private readonly dummyService: DummyService,
    private readonly loggerService: LoggerService
  ){

  }
  getHello(): string {
    return this.loggerService.log(`Hello World!${this.dummyService.work()}`);
  }
}
