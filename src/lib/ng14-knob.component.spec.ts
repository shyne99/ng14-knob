import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng14KnobComponent } from './ng14-knob.component';

describe('Ng14KnobComponent', () => {
  let component: Ng14KnobComponent;
  let fixture: ComponentFixture<Ng14KnobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng14KnobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ng14KnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
