import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { IStudent } from 'src/interface/student.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class StudentService {
    constructor(@InjectModel('Student') private studentModel:Model<IStudent>){}
    
    ////add student
    async createStudent(CreateStudentDto:CreateStudentDto,stu:IStudent):Promise<IStudent>{
        const newStudent=await new this.studentModel(CreateStudentDto,stu.registrationNumber=uuidv4());
        return newStudent.save()
    }

    ////updated student
    async updateStudent(UpdateStudentDto:UpdateStudentDto,studentId:string):Promise<IStudent>{
        const existingStudent=await this.studentModel.findByIdAndUpdate(studentId,UpdateStudentDto,{new:true})

        if (!existingStudent) {
            throw new NotFoundException(`student ${studentId} not found`)
        }else{
            return existingStudent
        }
    }

    ////get all student
    async getStudent():Promise<IStudent[]>{
        const getAllStudent=await this.studentModel.find()
        if (!getAllStudent) {
            throw new NotFoundException(`student list didn't fetched`)
        }else{
            return getAllStudent
        }
    }

    ////get one student by id
    async getStudentById(studentId:string):Promise<IStudent>{
        const getStudentbyid=await this.studentModel.findById(studentId);
        if (!getStudentbyid) {
            throw new NotFoundException(`student ${studentId} not found`)
        } else {
            return getStudentbyid
        }
    }
}
