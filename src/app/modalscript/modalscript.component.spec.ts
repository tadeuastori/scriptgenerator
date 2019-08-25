import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalscriptComponent } from './modalscript.component';

describe('ModalscriptComponent', () => {
  let component: ModalscriptComponent;
  let fixture: ComponentFixture<ModalscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
