import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExploradorComponent } from './header-explorador.component';

describe('HeaderComponent', () => {
  let component: HeaderExploradorComponent;
  let fixture: ComponentFixture<HeaderExploradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderExploradorComponent]
    });
    fixture = TestBed.createComponent(HeaderExploradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
