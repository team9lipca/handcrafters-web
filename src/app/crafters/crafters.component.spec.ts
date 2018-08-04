import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftersComponent } from './crafters.component';

describe('CraftersComponent', () => {
  let component: CraftersComponent;
  let fixture: ComponentFixture<CraftersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
