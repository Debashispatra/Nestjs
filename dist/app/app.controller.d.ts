import { Book } from 'src/book/book';
export declare class AppController {
    private bookService;
    constructor(bookService: Book);
    findAll(): string;
    create(): string;
}
