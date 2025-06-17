import { Module } from '@nestjs/common';
import { User1Module } from './user1/user1.module';
import { User2Module } from './user2/user2.module';
import { User3Module } from './user3/user3.module';

@Module({
  imports: [User1Module, User2Module, User3Module],
  
})
export class AppModule {}
