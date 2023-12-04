import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenaComponent } from './cena.component';

describe('CenaComponent', () => {
  let component: CenaComponent;
  let fixture: ComponentFixture<CenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenaComponent]
    });
    fixture = TestBed.createComponent(CenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
