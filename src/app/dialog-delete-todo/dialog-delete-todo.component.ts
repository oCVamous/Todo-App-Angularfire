import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-dialog-delete-todo',
  templateUrl: './dialog-delete-todo.component.html',
  styleUrls: ['./dialog-delete-todo.component.scss']
})
export class DialogDeleteTodoComponent implements OnInit {
  currentTodo: any;
  constructor(public todosService: TodosService, public dialogRef: MatDialogRef<DialogDeleteTodoComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * For deleting the service has to be called and the current todo has to be passed
   * @param currentTodo 
   */
  deleteTodo(currentTodo) {
    this.todosService.deleteTodo(this.currentTodo);
    this.onNoClick();
  }


}
