import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctioncontrolComponent } from './functioncontrol.component';

describe('FunctioncontrolComponent', () => {
  let component: FunctioncontrolComponent;
  let fixture: ComponentFixture<FunctioncontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctioncontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctioncontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
