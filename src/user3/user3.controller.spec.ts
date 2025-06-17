import { Test, TestingModule } from '@nestjs/testing';
import { User3Controller } from './user3.controller';

describe('User3Controller', () => {
  let controller: User3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User3Controller],
    }).compile();

    controller = module.get<User3Controller>(User3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
