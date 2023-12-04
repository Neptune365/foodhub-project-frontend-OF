import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCreadorMiPerfilComponent } from './body-creador-mi-perfil.component';

describe('BodyCreadorMiPerfilComponent', () => {
  let component: BodyCreadorMiPerfilComponent;
  let fixture: ComponentFixture<BodyCreadorMiPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCreadorMiPerfilComponent]
    });
    fixture = TestBed.createComponent(BodyCreadorMiPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
