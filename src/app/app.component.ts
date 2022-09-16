import { Component } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogAddTodoComponent } from './dialog-add-todo/dialog-add-todo.component';
import { DialogDeleteTodoComponent } from './dialog-delete-todo/dialog-delete-todo.component';
import { DialogEditTodoComponent } from './dialog-edit-todo/dialog-edit-todo.component';
import { TodosService } from './todos.service';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '<Patricks Todo-List>';
  todos$: Observable<any>;
  todos: Array<any>;
  
  constructor(public dialog: MatDialog, 
    public todosService: TodosService,
    firestore: Firestore) {
      const coll = collection(firestore, 'Patricks Todos');
      this.todos$ = collectionData(coll);

      this.todos$.subscribe( (newTodos) => {
        console.log('Meine Todos sind:', newTodos);
        this.todos = newTodos;
        
      });
  }
  /**
   * Opens the dialog window by opening the correct composed dialog(DialogAddTodoComponent)
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddTodoComponent); 
  }

  /**
   * Opens the dialog window by opening the correct composed dialog(DialogEditTodoComponent)
   * Important: The respective todo must be passed, so that the correct todo can be processed.
   * @param todo 
   */
  openEditDialog(todo: any): void {
    const dialogRef = this.dialog.open(DialogEditTodoComponent); 
    dialogRef.componentInstance.currentTodo = todo;
  }
  /**
   * Opens the dialog window by opening the correct composed dialog(DialogEditTodoComponent)
   * Important: The respective todo must be passed, so that the correct todo can be deleted.
   * @param todo 
   */
  openDeleteDialog(todo: any): void {
    const dialogRef = this.dialog.open(DialogDeleteTodoComponent); 
    dialogRef.componentInstance.currentTodo = todo; //To access the functions and variables of a component you need instanceOf
  }


}
