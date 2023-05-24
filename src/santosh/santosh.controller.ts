import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SantoshService } from './santosh.service';
import { CreateSantoshDto } from './dto/create-santosh.dto';
import { UpdateSantoshDto } from './dto/update-santosh.dto';

@Controller('santosh')
export class SantoshController {
  constructor(private readonly santoshService: SantoshService) {}

  @Post()
  create(@Body() createSantoshDto: CreateSantoshDto) {
    return this.santoshService.create(createSantoshDto);
  }

  @Get()
  findAll() {
    return this.santoshService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.santoshService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSantoshDto: UpdateSantoshDto) {
    return this.santoshService.update(+id, updateSantoshDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.santoshService.remove(+id);
  }
}
