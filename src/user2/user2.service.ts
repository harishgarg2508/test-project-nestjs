import { Injectable } from '@nestjs/common';

@Injectable()
export class User2Service {
    constructor(private readonly timeFromUser1: string) {}

    getTime(): string {
        return `Time from User1Service using User2Factory: ${this.timeFromUser1}`;
    }
}
