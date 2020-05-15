import { TodosService } from '@serverAPI/todos/todos.service';
import { TodosController } from '@serverAPI/todos/todos.controller';
import { TodoSchema } from '@serverAPI/todos/schemas/todo.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
