import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaCrumbComponent } from './ea-crumb.component';

describe('EaCrumbComponent', () => {
  let component: EaCrumbComponent;
  let fixture: ComponentFixture<EaCrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaCrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
