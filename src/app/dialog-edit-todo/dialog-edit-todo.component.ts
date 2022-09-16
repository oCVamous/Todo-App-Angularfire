import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-dialog-edit-todo',
  templateUrl: './dialog-edit-todo.component.html',
  styleUrls: ['./dialog-edit-todo.component.scss']
})
export class DialogEditTodoComponent implements OnInit {

  constructor(public todosService: TodosService, public dialogRef: MatDialogRef<DialogEditTodoComponent>) { }
  newTodo: any;
  currentTodo: any;
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
