import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrsteOvlascenjaComponent } from './vrste-ovlascenja.component';

describe('VrsteOvlascenjaComponent', () => {
  let component: VrsteOvlascenjaComponent;
  let fixture: ComponentFixture<VrsteOvlascenjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrsteOvlascenjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrsteOvlascenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
