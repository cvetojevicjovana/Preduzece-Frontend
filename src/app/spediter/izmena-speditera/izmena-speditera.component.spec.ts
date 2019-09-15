import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaSpediteraComponent } from './izmena-speditera.component';

describe('IzmenaSpediteraComponent', () => {
  let component: IzmenaSpediteraComponent;
  let fixture: ComponentFixture<IzmenaSpediteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaSpediteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaSpediteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
