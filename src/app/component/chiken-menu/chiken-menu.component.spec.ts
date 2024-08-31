import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChikenMenuComponent } from './chiken-menu.component';

describe('ChikenMenuComponent', () => {
  let component: ChikenMenuComponent;
  let fixture: ComponentFixture<ChikenMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChikenMenuComponent]
    });
    fixture = TestBed.createComponent(ChikenMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
