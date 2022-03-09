import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBasedProductsComponent } from './research-based-products.component';

describe('ResearchBasedProductsComponent', () => {
  let component: ResearchBasedProductsComponent;
  let fixture: ComponentFixture<ResearchBasedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchBasedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchBasedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
