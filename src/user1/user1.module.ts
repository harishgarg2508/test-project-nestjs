import { Module } from '@nestjs/common';
import { User1Service } from './user1.service';

@Module({
  providers: [User1Service],
  exports: [User1Service],
})
export class User1Module {}