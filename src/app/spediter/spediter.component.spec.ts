import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpediterComponent } from './spediter.component';

describe('SpediterComponent', () => {
  let component: SpediterComponent;
  let fixture: ComponentFixture<SpediterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpediterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpediterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
