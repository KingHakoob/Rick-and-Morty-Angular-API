import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharpageComponent } from './charpage.component';

describe('CharpageComponent', () => {
  let component: CharpageComponent;
  let fixture: ComponentFixture<CharpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharpageComponent]
    });
    fixture = TestBed.createComponent(CharpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
