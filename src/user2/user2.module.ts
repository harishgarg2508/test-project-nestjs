import { Module, Scope } from '@nestjs/common';
import { User2Service } from './user2.service';
import { User1Module } from 'src/user1/user1.module';

@Module({
  imports: [User1Module],
  providers: [User2Service,
    {
      provide: 'TIME_PROVIDER',
     useFactory: ()=>{
      return new Date().toISOString();
     },
     scope:Scope.REQUEST,
    },
  ],
  exports:[User2Service]
})
export class User2Module {}
