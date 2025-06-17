import { Controller, Get } from '@nestjs/common';
import { User1Service } from './user1.service';

@Controller('user1')

export class User1Controller {
    constructor(private readonly user1Service: User1Service) {}

    @Get('time')
    create(): { message: string } {

        const time =  this.user1Service.getTime();
        console.log("this is form user 1");
        return { message: time };
    }
}
