import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyExploradorExplorarRecetasComponent } from './body-explorador-explorar-recetas.component';

describe('BodyExploradorExplorarRecetasComponent', () => {
  let component: BodyExploradorExplorarRecetasComponent;
  let fixture: ComponentFixture<BodyExploradorExplorarRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyExploradorExplorarRecetasComponent]
    });
    fixture = TestBed.createComponent(BodyExploradorExplorarRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
