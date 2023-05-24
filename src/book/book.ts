import { Injectable } from '@nestjs/common';

@Injectable()
export class Book {
    findAll(): string {
        return 'This action returns all cats';
    }

    add(): string {
        return 'This action create all cats'
    }
}
