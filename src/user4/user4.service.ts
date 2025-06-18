import {Injectable, Scope } from '@nestjs/common';
import { User1Service } from 'src/user1/user1.service';

@Injectable({scope:Scope.REQUEST})
export class User4Service {
    constructor(private readonly User1Service:User1Service, private readonly currentTime:string){}


    getHello(): string {
        console.log("hello is called in user4service")
        return this.User1Service.getHello()


    }
    getCurrentTime():string{
        console.log("time is called in user4service")
        return this.currentTime;
    }
}
