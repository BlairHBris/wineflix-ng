import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkAgainWinesComponent } from './drink-again-wines.component';

describe('DrinkAgainWinesComponent', () => {
  let component: DrinkAgainWinesComponent;
  let fixture: ComponentFixture<DrinkAgainWinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkAgainWinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkAgainWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
