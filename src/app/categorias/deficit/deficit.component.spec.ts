import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficitComponent } from './deficit.component';

describe('DeficitComponent', () => {
  let component: DeficitComponent;
  let fixture: ComponentFixture<DeficitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeficitComponent]
    });
    fixture = TestBed.createComponent(DeficitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
