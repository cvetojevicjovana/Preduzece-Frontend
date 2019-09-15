import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosSpediteraComponent } from './unos-speditera.component';

describe('UnosSpediteraComponent', () => {
  let component: UnosSpediteraComponent;
  let fixture: ComponentFixture<UnosSpediteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosSpediteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosSpediteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
