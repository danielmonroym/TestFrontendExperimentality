import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularproductsComponent } from './popularproducts.component';

describe('PopularproductsComponent', () => {
  let component: PopularproductsComponent;
  let fixture: ComponentFixture<PopularproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
