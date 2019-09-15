import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazMemorandumaComponent } from './prikaz-memoranduma.component';

describe('PrikazMemorandumaComponent', () => {
  let component: PrikazMemorandumaComponent;
  let fixture: ComponentFixture<PrikazMemorandumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazMemorandumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazMemorandumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
