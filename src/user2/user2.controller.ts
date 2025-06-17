import { Controller, Get } from '@nestjs/common';
import { User2Service } from './user2.service';

@Controller('user2')
export class User2Controller {
  constructor(private readonly user2Service: User2Service) {}

   @Get('time')
   getTime(){
    console.log('this is from user2 controller');
    return this.user2Service.getProvidedTime();
   }
}
