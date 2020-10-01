import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackofficeModule } from './backoffice/backoffice.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://edalmeida:edkeka0812@localhost:27017/admin',{useCreateIndex:true}),
    BackofficeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
