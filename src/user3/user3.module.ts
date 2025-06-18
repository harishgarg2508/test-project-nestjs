import { Module } from '@nestjs/common';
import { User3Service } from './user3.service';
import { User4Module } from 'src/user4/user4.module';
import { User3Controller } from './user3.controller';

@Module({
  imports:[User4Module], 
  providers: [User3Service],
  controllers: [User3Controller]
})
export class User3Module {}
