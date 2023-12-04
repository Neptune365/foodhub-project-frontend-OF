import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCreadorCrearRecetaComponent } from './body-creador-crear-receta.component';

describe('BodyCreadorCrearRecetaComponent', () => {
  let component: BodyCreadorCrearRecetaComponent;
  let fixture: ComponentFixture<BodyCreadorCrearRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCreadorCrearRecetaComponent]
    });
    fixture = TestBed.createComponent(BodyCreadorCrearRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
