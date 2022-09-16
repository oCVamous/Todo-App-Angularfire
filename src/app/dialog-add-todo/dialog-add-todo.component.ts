import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-todo',
  templateUrl: './dialog-add-todo.component.html',
  styleUrls: ['./dialog-add-todo.component.scss']
})
export class DialogAddTodoComponent {

  constructor(public dialogRef: MatDialogRef<DialogAddTodoComponent>) { }

  ngOnInit(): void {
  }

}
