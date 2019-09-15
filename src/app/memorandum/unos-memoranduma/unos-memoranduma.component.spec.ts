import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosMemorandumaComponent } from './unos-memoranduma.component';

describe('UnosMemorandumaComponent', () => {
  let component: UnosMemorandumaComponent;
  let fixture: ComponentFixture<UnosMemorandumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosMemorandumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosMemorandumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
