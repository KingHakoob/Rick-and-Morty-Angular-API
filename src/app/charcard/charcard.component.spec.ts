import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcardComponent } from './charcard.component';

describe('CharcardComponent', () => {
  let component: CharcardComponent;
  let fixture: ComponentFixture<CharcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharcardComponent]
    });
    fixture = TestBed.createComponent(CharcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
