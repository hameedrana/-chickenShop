import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenFooterComponent } from './chicken-footer.component';

describe('ChickenFooterComponent', () => {
  let component: ChickenFooterComponent;
  let fixture: ComponentFixture<ChickenFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChickenFooterComponent]
    });
    fixture = TestBed.createComponent(ChickenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
