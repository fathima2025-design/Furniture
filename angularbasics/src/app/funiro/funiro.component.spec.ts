import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuniroComponent } from './funiro.component';

describe('FuniroComponent', () => {
  let component: FuniroComponent;
  let fixture: ComponentFixture<FuniroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuniroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuniroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
