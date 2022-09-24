import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import orderBy from "lodash/orderBy";
import { setDoc } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  newTodo!: string;
  allTodos: any[] = [];
  completeTodos = [];
  coll: CollectionReference;
   todos$: Observable<any>;
   todos: Array<any>;
   
  constructor(public firestore: Firestore) {
    this.coll = collection(firestore, 'Patricks Todos');
    this.todos$ = collectionData(this.coll, { idField: 'id'}); //We need the ID to be able to delete the correct element in our observable in the Firebase DB.
 

      this.todos$.subscribe( (newTodos) => { //subscribe provides and the latest data of the DB 
        this.allTodos = newTodos; //we store this new data in the variable allTodos every time we make a change
        this.todos = this.allTodos;
      });
    this.loadFromLocalStorage();
  }

  /**
   * The new todo is stored in the array allTodos and then loaded into the local storage
   * @param newTodo 
   */
  saveTodo(newTodo: string) {
    this.allTodos.push(newTodo);
    this.saveToLocalStorage();
  }
  /**
   * Marks the todo as finished by a check
   * we finish a todo by iterating through all the todos 
   * and if it doesn't match, we store it in the variable toDelTodo to delete it afterwards
   * @param currentTodo 
   */
   finishTodo(currentTodo) { 
    setTimeout( () => { //SetTimeout is needed to slow down the underlying function, so we have the click animation of the checkbox
      let updatedTodo = [];
      for (let i = 0; i < this.allTodos.length; i++) {
      if (this.allTodos[i].todo != currentTodo['todo']) {
        const toDelTodo = doc(this.firestore, `Patricks Todos/${currentTodo['id']}`)
        deleteDoc(toDelTodo);
        updatedTodo.push(this.allTodos[i]);
      }
    }
    this.allTodos = updatedTodo; //To be up to date, we need to update our allTodo

    //   this.allTodos.splice(this.allTodos.indexOf(currentTodo['todo']), 1);
    this.completeTodos.push(currentTodo); //current todo is stored in completeTodos
    this.saveToLocalStorage();
    }, 800);
    
  }

  /**
   * To delete the right todo I access the array allTodo and find out the index of the currentTodo.
   * With this index I delete exactly this index position of the allTodo.
   * Then I push the new edited todo (which in this case is a newTodo) into allTodo
   * @param newTodo 
   * @param currentTodo 
   */
  updateTodo(currentTodo: string) {
    // this.allTodos.splice(this.allTodos.indexOf(currentTodo), 1);
    // this.allTodos.push(newTodo);
    // this.saveToLocalStorage();
    console.log(currentTodo['id']);
    for(let i = 0; i< allTodos.length; i++) {
      if(this.allTodos[i].todo != currentTodo['todo']) {
        const toUpdateTodo = doc(this.firestore, `Patricks Todos/${currentTodo['id']})`setDoc(updateTodo, currentTodo)
      })
    }

  }
  /**
   * deletes the todo from the array completeTodos and updates the local storage
   * @param currentTodo 
   */
  deleteTodo(currentTodo: string) {
    this.completeTodos.splice(this.completeTodos.indexOf(currentTodo), 1); //the currentTodo has an index, we use this to remove the correct element from allTodos
    this.saveToLocalStorage();
  }
  /**
   * sortiert alle todos (auch allTodos und completeTodos) und aktualisiert den lokalen Speicher
   */
  sortTodos() {

    this.todos  = orderBy(this.allTodos,["createdat"],["asc"]) ; //The ASC command is used to sort the data returned in ascending order.
    this.completeTodos = orderBy(this.completeTodos,["createdat"],["asc"]) ;
     
    
    this.saveToLocalStorage();
  }

  /**
   * Step 1: Create memory variable and make array a text
   * Step2: Create key and make the arrayText 
   */
  saveToLocalStorage() {
    let TodoAsText = JSON.stringify(this.allTodos); //stringify --->converts a JavaScript value to a JSON string
    let CompleteTodoAsText = JSON.stringify(this.completeTodos);

    localStorage.setItem('allTodos', TodoAsText);
    localStorage.setItem('completeTodos', CompleteTodoAsText);
  }

  /**
   * Step1: Access the key and store it in variable.
   * Step2: Convert the text back to a JSON object
   */
  loadFromLocalStorage() {
    let allTodosAsText = localStorage.getItem('allTodos'); //'allTodos' = key
    let completeTodosAsTest = localStorage.getItem('completeTodos');

    if (allTodosAsText && completeTodosAsTest) {
      this.allTodos = JSON.parse(allTodosAsText); //Parse a string (written in JSON format) and return a JavaScript object:
      this.completeTodos = JSON.parse(completeTodosAsTest);
    }
  }


}
  

