import { Test, TestingModule } from '@nestjs/testing';
import { SantoshService } from './santosh.service';

describe('SantoshService', () => {
  let service: SantoshService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SantoshService],
    }).compile();

    service = module.get<SantoshService>(SantoshService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
