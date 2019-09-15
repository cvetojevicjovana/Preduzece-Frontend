import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazVrsteOvlascenjaComponent } from './prikaz-vrste-ovlascenja.component';

describe('PrikazVrsteOvlascenjaComponent', () => {
  let component: PrikazVrsteOvlascenjaComponent;
  let fixture: ComponentFixture<PrikazVrsteOvlascenjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazVrsteOvlascenjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazVrsteOvlascenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
