import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusiComponent } from './bonusi.component';

describe('BonusiComponent', () => {
  let component: BonusiComponent;
  let fixture: ComponentFixture<BonusiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
