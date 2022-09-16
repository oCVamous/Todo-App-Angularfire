import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-dialog-add-todo',
  templateUrl: './dialog-add-todo.component.html',
  styleUrls: ['./dialog-add-todo.component.scss']
})
export class DialogAddTodoComponent implements OnInit {
  newTodo: any;
  constructor(public todosService: TodosService, public dialogRef: MatDialogRef<DialogAddTodoComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }
 /**
  * To save, the service must be called and the new todo must be passed
  */
  saveTodo() {
    this.todosService.saveTodo(this.newTodo);
    this.closeDialog();
  }

  

}
