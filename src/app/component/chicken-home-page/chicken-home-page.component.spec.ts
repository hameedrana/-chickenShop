import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenHomePageComponent } from './chicken-home-page.component';

describe('ChickenHomePageComponent', () => {
  let component: ChickenHomePageComponent;
  let fixture: ComponentFixture<ChickenHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChickenHomePageComponent]
    });
    fixture = TestBed.createComponent(ChickenHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
