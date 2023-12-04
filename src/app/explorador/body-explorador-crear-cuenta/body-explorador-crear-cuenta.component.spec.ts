import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyExploradorCrearCuentaComponent } from './body-explorador-crear-cuenta.component';

describe('BodyExploradorCrearCuentaComponent', () => {
  let component: BodyExploradorCrearCuentaComponent;
  let fixture: ComponentFixture<BodyExploradorCrearCuentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyExploradorCrearCuentaComponent]
    });
    fixture = TestBed.createComponent(BodyExploradorCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
