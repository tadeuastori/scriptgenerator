import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcubeComponent } from './newcube.component';

describe('NewcubeComponent', () => {
  let component: NewcubeComponent;
  let fixture: ComponentFixture<NewcubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
