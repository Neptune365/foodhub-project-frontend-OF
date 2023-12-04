import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyExploradorIniciarSesionComponent } from './body-explorador-iniciar-sesion.component';

describe('BodyExploradorIniciarSesionComponent', () => {
  let component: BodyExploradorIniciarSesionComponent;
  let fixture: ComponentFixture<BodyExploradorIniciarSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyExploradorIniciarSesionComponent]
    });
    fixture = TestBed.createComponent(BodyExploradorIniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
