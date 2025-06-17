import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class User1Service {
     
  getTime(): string {
    return new Date().toISOString();
  }

}
