import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app/app.controller';
import { Book } from './book/book';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student/student.service';
import { StudentController } from './controller/student/student.controller';
import { SantoshModule } from './santosh/santosh.module';


@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
            MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
            SantoshModule],
  controllers: [AppController, StudentController],
  providers: [Book, StudentService],
})
export class AppModule {
  constructor(){
    console.log('app module');
  }
}
