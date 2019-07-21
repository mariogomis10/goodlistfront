import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListeComponent } from './add-liste.component';

describe('AddListeComponent', () => {
  let component: AddListeComponent;
  let fixture: ComponentFixture<AddListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
