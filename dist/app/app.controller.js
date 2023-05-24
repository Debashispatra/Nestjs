"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const book_1 = require("../book/book");
let AppController = class AppController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    findAll() {
        return this.bookService.findAll();
    }
    create() {
        return this.bookService.add();
    }
};
__decorate([
    (0, common_1.Get)('/findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "create", null);
AppController = __decorate([
    (0, common_1.Controller)('app'),
    __metadata("design:paramtypes", [book_1.Book])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map