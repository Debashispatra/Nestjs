import { CreateSantoshDto } from './dto/create-santosh.dto';
import { UpdateSantoshDto } from './dto/update-santosh.dto';
export declare class SantoshService {
    create(createSantoshDto: CreateSantoshDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSantoshDto: UpdateSantoshDto): string;
    remove(id: number): string;
}
