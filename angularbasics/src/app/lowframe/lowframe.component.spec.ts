import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowframeComponent } from './lowframe.component';

describe('LowframeComponent', () => {
  let component: LowframeComponent;
  let fixture: ComponentFixture<LowframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
