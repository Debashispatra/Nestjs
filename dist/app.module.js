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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app/app.controller");
const book_1 = require("./book/book");
const student_schema_1 = require("./schema/student.schema");
const student_service_1 = require("./service/student/student.service");
const student_controller_1 = require("./controller/student/student.controller");
let AppModule = class AppModule {
    constructor() {
        console.log('app module');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
            mongoose_1.MongooseModule.forFeature([{ name: 'Student', schema: student_schema_1.StudentSchema }])],
        controllers: [app_controller_1.AppController, student_controller_1.StudentController],
        providers: [book_1.Book, student_service_1.StudentService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map