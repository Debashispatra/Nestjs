import { CreateStudentDto } from 'src/dto/create-student.dto';
import { StudentService } from 'src/service/student/student.service';
import { IStudent } from 'src/interface/student.interface';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    createStudent(response: any, createStudentDto: CreateStudentDto, reg: IStudent): Promise<any>;
    updateStudent(response: any, updateStudentDto: UpdateStudentDto, studentId: string): Promise<any>;
    getStudent(response: any): Promise<any>;
    getStudentById(response: any, studentId: string): Promise<any>;
}
