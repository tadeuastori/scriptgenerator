import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcubeComponent } from './editcube.component';

describe('EditcubeComponent', () => {
  let component: EditcubeComponent;
  let fixture: ComponentFixture<EditcubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
