import { Injectable, Scope } from '@nestjs/common';

@Injectable({scope:Scope.REQUEST})
export class User3Service {
    getWorld():string{
        console.log("world is called in user3 service")
        return 'world'
    }
}
