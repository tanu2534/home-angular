import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec5Component } from './sec5.component';

describe('Sec5Component', () => {
  let component: Sec5Component;
  let fixture: ComponentFixture<Sec5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sec5Component]
    });
    fixture = TestBed.createComponent(Sec5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
