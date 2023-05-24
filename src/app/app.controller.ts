import { Controller, Get, Post } from '@nestjs/common';
import { Book } from 'src/book/book';

@Controller('app')
export class AppController {

    constructor(private bookService:Book){}

    @Get('/findAll')
    findAll(): string {
      return this.bookService.findAll();
    }

    @Post('/add')
    create(): string {
      return this.bookService.add();
    }
}
