"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const common_1 = require("@nestjs/common");
let Book = class Book {
    findAll() {
        return 'This action returns all cats';
    }
    add() {
        return 'This action create all cats';
    }
};
Book = __decorate([
    (0, common_1.Injectable)()
], Book);
exports.Book = Book;
//# sourceMappingURL=book.js.map