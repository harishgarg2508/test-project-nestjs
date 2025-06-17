import { Inject, Injectable, Scope } from '@nestjs/common';
import { User1Service } from 'src/user1/user1.service';

@Injectable({scope:Scope.REQUEST})
export class User2Service {
    constructor(private readonly User1Service:User1Service,
        @Inject('TIME_PROVIDER') private readonly currentTime:string){}


    getHello(): string {
        return this.User1Service.getHello()


    }
    getCurrentTime():string{
        return this.currentTime;
    }
}
