import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaMemorandumaComponent } from './izmena-memoranduma.component';

describe('IzmenaMemorandumaComponent', () => {
  let component: IzmenaMemorandumaComponent;
  let fixture: ComponentFixture<IzmenaMemorandumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaMemorandumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaMemorandumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
