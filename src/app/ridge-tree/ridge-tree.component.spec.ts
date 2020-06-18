import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidgeTreeComponent } from './ridge-tree.component';

describe('RidgeTreeComponent', () => {
  let component: RidgeTreeComponent;
  let fixture: ComponentFixture<RidgeTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidgeTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidgeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
