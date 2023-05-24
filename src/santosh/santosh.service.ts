import { Injectable } from '@nestjs/common';
import { CreateSantoshDto } from './dto/create-santosh.dto';
import { UpdateSantoshDto } from './dto/update-santosh.dto';

@Injectable()
export class SantoshService {
  create(createSantoshDto: CreateSantoshDto) {
    return 'This action adds a new santosh';
  }

  findAll() {
    return `This action returns all santosh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} santosh`;
  }

  update(id: number, updateSantoshDto: UpdateSantoshDto) {
    return `This action updates a #${id} santosh`;
  }

  remove(id: number) {
    return `This action removes a #${id} santosh`;
  }
}
