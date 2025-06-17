import { Module } from '@nestjs/common';
import { User3Service } from './user3.service';
import { User2Module } from 'src/user2/user2.module';
import { User3Controller } from './user3.controller';

@Module({
  imports:[User2Module], 
  providers: [User3Service],
  controllers: [User3Controller]
})
export class User3Module {}
