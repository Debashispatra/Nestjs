import { PartialType } from '@nestjs/mapped-types';
import { CreateSantoshDto } from './create-santosh.dto';

export class UpdateSantoshDto extends PartialType(CreateSantoshDto) {}
