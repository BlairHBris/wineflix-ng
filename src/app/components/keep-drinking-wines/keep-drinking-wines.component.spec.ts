import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepDrinkingWinesComponent } from './keep-drinking-wines.component';

describe('KeepDrinkingWinesComponent', () => {
  let component: KeepDrinkingWinesComponent;
  let fixture: ComponentFixture<KeepDrinkingWinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepDrinkingWinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepDrinkingWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
