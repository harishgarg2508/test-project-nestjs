import { Module, Scope } from '@nestjs/common';
import { User4Service } from './user4.service';
import { User1Module } from 'src/user1/user1.module';
import { User1Service } from 'src/user1/user1.service';


class CurrentTime {
  public create(): string {
    return new Date().toISOString();
  }
}

@Module({
  imports: [User1Module],
  providers: [
    {
      provide: User4Service,
     useFactory: (user1Service: User1Service) => {
      const Time = new CurrentTime().create();
      return new User4Service(user1Service, Time);
     },
     inject: [User1Service],
     scope:Scope.REQUEST,
    },
  ],
  exports:[User4Service]
})
export class User4Module {}
