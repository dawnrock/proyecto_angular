import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuegraComponent } from './suegra.component';

describe('SuegraComponent', () => {
  let component: SuegraComponent;
  let fixture: ComponentFixture<SuegraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuegraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuegraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
