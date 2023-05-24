import { Module } from '@nestjs/common';
import { SantoshService } from './santosh.service';
import { SantoshController } from './santosh.controller';

@Module({
  controllers: [SantoshController],
  providers: [SantoshService]
})
export class SantoshModule {}
