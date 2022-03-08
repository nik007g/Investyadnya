import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandStatsComponent } from './brand-stats.component';

describe('BrandStatsComponent', () => {
  let component: BrandStatsComponent;
  let fixture: ComponentFixture<BrandStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
