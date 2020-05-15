import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from '@shared/form/form.component';
import { TodosListComponent } from '@app/todos/components/todos-list/todos-list.component';
import { HeaderComponent } from '@shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosListComponent, FormComponent, HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodosListComponent, FormComponent, HeaderComponent],
})
export class HomeModule {}
