import { Module, Scope } from '@nestjs/common';
import { User2Service } from './user2.service';
import { User2Controller } from './user2.controller';
import { User1Service } from 'src/user1/user1.service';
import { User1Module } from 'src/user1/user1.module';

@Module({
  imports: [User1Module],
  providers: [
    {
      provide: User2Service,
      useFactory: (user1Service: User1Service) => {
        const currentTime = user1Service.getTime();
        return new User2Service(currentTime);
      },
      inject: [User1Service], 
    },
  ],
  controllers: [User2Controller],
  exports:[User2Service]
})
export class User2Module {}
