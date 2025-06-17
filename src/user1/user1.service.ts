import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class User1Service {
  getHello(): string {
    return 'hello';
  }
}