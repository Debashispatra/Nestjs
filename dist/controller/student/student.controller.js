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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const create_student_dto_1 = require("../../dto/create-student.dto");
const student_service_1 = require("../../service/student/student.service");
const update_student_dto_1 = require("../../dto/update-student.dto");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async createStudent(response, createStudentDto, reg) {
        try {
            const newStudent = await this.studentService.createStudent(createStudentDto, reg);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Student has been created successfully',
                newStudent,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created!',
                error: 'Bad Request'
            });
        }
    }
    async updateStudent(response, updateStudentDto, studentId) {
        try {
            const existingStudent = await this.studentService.updateStudent(updateStudentDto, studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Student has been successfully updated!',
                existingStudent
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getStudent(response) {
        try {
            const getAllStudent = await this.studentService.getStudent();
            return response.status(common_1.HttpStatus.FOUND).json({
                message: 'All student data found successfully',
                getAllStudent
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async getStudentById(response, studentId) {
        try {
            const getOneStudent = await this.studentService.getStudentById(studentId);
            return response.status(common_1.HttpStatus.FOUND).json({
                message: 'Student found successfully',
                getOneStudent
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_student_dto_1.CreateStudentDto, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_student_dto_1.UpdateStudentDto, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateStudent", null);
__decorate([
    (0, common_1.Get)('/getall'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudent", null);
__decorate([
    (0, common_1.Get)('/getOneStudent/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudentById", null);
StudentController = __decorate([
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map