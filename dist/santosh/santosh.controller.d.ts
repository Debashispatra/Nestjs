import { SantoshService } from './santosh.service';
import { CreateSantoshDto } from './dto/create-santosh.dto';
import { UpdateSantoshDto } from './dto/update-santosh.dto';
export declare class SantoshController {
    private readonly santoshService;
    constructor(santoshService: SantoshService);
    create(createSantoshDto: CreateSantoshDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSantoshDto: UpdateSantoshDto): string;
    remove(id: string): string;
}
