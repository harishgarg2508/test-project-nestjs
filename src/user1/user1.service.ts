import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class User1Service {
  getHello(): string {
    console.log("user1 service is called")
    return 'hello';
  }
}