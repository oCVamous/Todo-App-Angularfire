import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteTodoComponent } from './dialog-delete-todo.component';

describe('DialogDeleteTodoComponent', () => {
  let component: DialogDeleteTodoComponent;
  let fixture: ComponentFixture<DialogDeleteTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
