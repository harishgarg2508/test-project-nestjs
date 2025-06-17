import { Injectable, Scope } from '@nestjs/common';

@Injectable({scope:Scope.REQUEST})
export class User3Service {
    getWorld():string{
        return 'world'
    }
}
