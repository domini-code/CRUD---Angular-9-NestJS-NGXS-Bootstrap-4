import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './components/todos-list/todos-list.component';



@NgModule({
  declarations: [TodosListComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
