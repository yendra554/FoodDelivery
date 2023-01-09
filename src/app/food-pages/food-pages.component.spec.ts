import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPagesComponent } from './food-pages.component';

describe('FoodPagesComponent', () => {
  let component: FoodPagesComponent;
  let fixture: ComponentFixture<FoodPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
