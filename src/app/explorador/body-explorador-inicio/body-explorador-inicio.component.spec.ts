import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyExploradorInicioComponent } from './body-explorador-inicio.component';

describe('BodyExploradorInicioComponent', () => {
  let component: BodyExploradorInicioComponent;
  let fixture: ComponentFixture<BodyExploradorInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyExploradorInicioComponent]
    });
    fixture = TestBed.createComponent(BodyExploradorInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
