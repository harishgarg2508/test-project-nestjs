import { Controller, Get, Inject } from '@nestjs/common';
import { User2Service } from '../user2/user2.service'; 

@Controller('user3')
export class User3Controller {
  constructor(private readonly user2Service: User2Service) {}

  @Get('time')
  getProcessedTime(): string {
    console.log('this is from user3 controller');
    return this.user2Service.getProvidedTime();
  }
}
