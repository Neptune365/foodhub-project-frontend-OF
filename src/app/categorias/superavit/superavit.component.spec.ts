import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperavitComponent } from './superavit.component';

describe('SuperavitComponent', () => {
  let component: SuperavitComponent;
  let fixture: ComponentFixture<SuperavitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperavitComponent]
    });
    fixture = TestBed.createComponent(SuperavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
