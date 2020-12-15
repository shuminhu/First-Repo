import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msp2rmsComponent } from './msp2rms.component';

describe('Msp2rmsComponent', () => {
  let component: Msp2rmsComponent;
  let fixture: ComponentFixture<Msp2rmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Msp2rmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Msp2rmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
