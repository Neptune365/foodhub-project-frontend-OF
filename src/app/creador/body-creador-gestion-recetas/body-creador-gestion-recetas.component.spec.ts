import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCreadorGestionRecetasComponent } from './body-creador-gestion-recetas.component';

describe('BodyCreadorGestionRecetasComponent', () => {
  let component: BodyCreadorGestionRecetasComponent;
  let fixture: ComponentFixture<BodyCreadorGestionRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCreadorGestionRecetasComponent]
    });
    fixture = TestBed.createComponent(BodyCreadorGestionRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
