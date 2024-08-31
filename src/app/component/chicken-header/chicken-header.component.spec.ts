import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenHeaderComponent } from './chicken-header.component';

describe('ChickenHeaderComponent', () => {
  let component: ChickenHeaderComponent;
  let fixture: ComponentFixture<ChickenHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChickenHeaderComponent]
    });
    fixture = TestBed.createComponent(ChickenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
