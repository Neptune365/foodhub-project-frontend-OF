import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCreadorExplorarRecetasComponent } from './body-creador-explorar-recetas.component';

describe('BodyCreadorExplorarRecetasComponent', () => {
  let component: BodyCreadorExplorarRecetasComponent;
  let fixture: ComponentFixture<BodyCreadorExplorarRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCreadorExplorarRecetasComponent]
    });
    fixture = TestBed.createComponent(BodyCreadorExplorarRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
