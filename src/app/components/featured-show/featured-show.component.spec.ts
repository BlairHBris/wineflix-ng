import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedShowComponent } from './featured-show.component';

describe('FeaturedShowComponent', () => {
  let component: FeaturedShowComponent;
  let fixture: ComponentFixture<FeaturedShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
