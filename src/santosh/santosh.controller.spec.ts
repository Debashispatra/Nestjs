import { Test, TestingModule } from '@nestjs/testing';
import { SantoshController } from './santosh.controller';
import { SantoshService } from './santosh.service';

describe('SantoshController', () => {
  let controller: SantoshController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SantoshController],
      providers: [SantoshService],
    }).compile();

    controller = module.get<SantoshController>(SantoshController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
