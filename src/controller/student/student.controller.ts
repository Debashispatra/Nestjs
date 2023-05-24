import { Controller, Body, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { StudentService } from 'src/service/student/student.service';
import { IStudent } from 'src/interface/student.interface';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post('/add')
    async createStudent(@Res() response, 
                        @Body() createStudentDto: CreateStudentDto,
                        @Body() reg: IStudent) {
        try {
            const newStudent = await this.studentService.createStudent(createStudentDto,reg);
            return response.status(HttpStatus.CREATED).json({
                message: 'Student has been created successfully',
                newStudent,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/update/:id')
    async updateStudent(@Res() response,
                        @Body() updateStudentDto:UpdateStudentDto,
                        @Param('id') studentId:string) {
        try {
            const existingStudent= await this.studentService.updateStudent(updateStudentDto,studentId);
            return response.status(HttpStatus.OK).json({
                message:'Student has been successfully updated!',
                existingStudent
            })
        } catch (err) {
            return response.status(err.status).json(err.response)
        }
        
    }

    @Get('/getall')
    async getStudent(@Res() response){
        try {
            const getAllStudent=await this.studentService.getStudent();
            return response.status(HttpStatus.FOUND).json({
                message:'All student data found successfully',
                getAllStudent
            })
        } catch (error) {
            return response.status(error.status).json(error.response)
        }
    }

    @Get('/getOneStudent/:id')
    async getStudentById(@Res() response,
                         @Param('id') studentId:string){
        try {
            const getOneStudent=await this.studentService.getStudentById(studentId);
            return response.status(HttpStatus.FOUND).json({
                message:'Student found successfully',
                getOneStudent
            })
        } catch (error) {
            return response.status(error.status).json(error.response)
        }
    }


}
