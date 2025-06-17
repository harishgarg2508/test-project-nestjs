import { Controller, Get } from '@nestjs/common';
import { User2Service } from '../user2/user2.service'; 
import { User3Service } from './user3.service';
@Controller('user3')
export class User3Controller {
  constructor(private readonly user2Service: User2Service,
    private readonly user3Service: User3Service,
  ) {}


  @Get()
  getData(){
    console.log("user3 controller is called")
    return {
      user1:this.user2Service.getHello(),
      user2:this.user2Service.getCurrentTime(),
      user3:this.user3Service.getWorld(),
    }
  }
}
