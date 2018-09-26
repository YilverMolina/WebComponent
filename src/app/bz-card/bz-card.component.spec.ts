import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzCardComponent } from './bz-card.component';

describe('BzCardComponent', () => {
  let component: BzCardComponent;
  let fixture: ComponentFixture<BzCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
