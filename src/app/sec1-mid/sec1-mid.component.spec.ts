import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1MidComponent } from './sec1-mid.component';

describe('Sec1MidComponent', () => {
  let component: Sec1MidComponent;
  let fixture: ComponentFixture<Sec1MidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sec1MidComponent]
    });
    fixture = TestBed.createComponent(Sec1MidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
