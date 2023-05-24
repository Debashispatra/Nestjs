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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
let StudentService = class StudentService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async createStudent(CreateStudentDto, stu) {
        const newStudent = await new this.studentModel(CreateStudentDto, stu.registrationNumber = (0, uuid_1.v4)());
        return newStudent.save();
    }
    async updateStudent(UpdateStudentDto, studentId) {
        const existingStudent = await this.studentModel.findByIdAndUpdate(studentId, UpdateStudentDto, { new: true });
        if (!existingStudent) {
            throw new common_1.NotFoundException(`student ${studentId} not found`);
        }
        else {
            return existingStudent;
        }
    }
    async getStudent() {
        const getAllStudent = await this.studentModel.find();
        if (!getAllStudent) {
            throw new common_1.NotFoundException(`student list didn't fetched`);
        }
        else {
            return getAllStudent;
        }
    }
    async getStudentById(studentId) {
        const getStudentbyid = await this.studentModel.findById(studentId);
        if (!getStudentbyid) {
            throw new common_1.NotFoundException(`student ${studentId} not found`);
        }
        else {
            return getStudentbyid;
        }
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Student')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map