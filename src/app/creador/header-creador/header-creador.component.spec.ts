import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCreadorComponent } from './header-creador.component';

describe('HeaderCreadorComponent', () => {
  let component: HeaderCreadorComponent;
  let fixture: ComponentFixture<HeaderCreadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCreadorComponent]
    });
    fixture = TestBed.createComponent(HeaderCreadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
