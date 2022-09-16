import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTodoComponent } from './dialog-edit-todo.component';

describe('DialogEditTodoComponent', () => {
  let component: DialogEditTodoComponent;
  let fixture: ComponentFixture<DialogEditTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
