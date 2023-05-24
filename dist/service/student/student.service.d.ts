import { Model } from 'mongoose';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { IStudent } from 'src/interface/student.interface';
export declare class StudentService {
    private studentModel;
    constructor(studentModel: Model<IStudent>);
    createStudent(CreateStudentDto: CreateStudentDto, stu: IStudent): Promise<IStudent>;
    updateStudent(UpdateStudentDto: UpdateStudentDto, studentId: string): Promise<IStudent>;
    getStudent(): Promise<IStudent[]>;
    getStudentById(studentId: string): Promise<IStudent>;
}
