import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-dialog-add-todo',
  templateUrl: './dialog-add-todo.component.html',
  styleUrls: ['./dialog-add-todo.component.scss']
})
export class DialogAddTodoComponent implements OnInit {
  newTodo: any;

  constructor(public todosService: TodosService,
     public dialogRef: MatDialogRef<DialogAddTodoComponent>,
     private firestore: Firestore) {
      const coll = collection(firestore, 'Patricks Todos');
      }

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

    const coll = collection(this.firestore, 'Patricks Todos');
    return setDoc(doc(coll), {todo: this.newTodo});
  }

  

}
