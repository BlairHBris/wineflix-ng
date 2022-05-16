import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScrollerComponent } from './show-scroller.component';

describe('ShowScrollerComponent', () => {
  let component: ShowScrollerComponent;
  let fixture: ComponentFixture<ShowScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
