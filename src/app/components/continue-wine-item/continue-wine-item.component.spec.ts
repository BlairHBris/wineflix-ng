import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWineItemComponent } from './continue-wine-item.component';

describe('ContinueWineItemComponent', () => {
  let component: ContinueWineItemComponent;
  let fixture: ComponentFixture<ContinueWineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueWineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueWineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
