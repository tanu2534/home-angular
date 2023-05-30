import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec4Component } from './sec4.component';

describe('Sec4Component', () => {
  let component: Sec4Component;
  let fixture: ComponentFixture<Sec4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sec4Component]
    });
    fixture = TestBed.createComponent(Sec4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
