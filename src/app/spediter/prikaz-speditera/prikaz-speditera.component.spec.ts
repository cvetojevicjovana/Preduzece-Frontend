import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazSpediteraComponent } from './prikaz-speditera.component';

describe('PrikazSpediteraComponent', () => {
  let component: PrikazSpediteraComponent;
  let fixture: ComponentFixture<PrikazSpediteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazSpediteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazSpediteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
