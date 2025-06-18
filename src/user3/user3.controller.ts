import { Controller, Get } from '@nestjs/common';
import { User4Service } from 'src/user4/user4.service';
import { User3Service } from './user3.service';
@Controller('user3')
export class User3Controller {
  constructor(private readonly user4Service: User4Service,
    private readonly user3Service: User3Service,
  ) {}


  @Get()
  getData(){
    console.log("user3 controller is called")
    return {
      user1: this.user4Service.getHello(),
      user4:this.user4Service.getCurrentTime(),
      user3:this.user3Service.getWorld(),
    }
  }
}


