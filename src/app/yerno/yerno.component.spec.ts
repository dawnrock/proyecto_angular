import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YernoComponent } from './yerno.component';

describe('YernoComponent', () => {
  let component: YernoComponent;
  let fixture: ComponentFixture<YernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
