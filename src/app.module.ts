import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student/student.service';
import { StudentController } from './controller/student/student.controller';
import { SantoshModule } from './santosh/santosh.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
            MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
            SantoshModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {
  constructor(){}
}
