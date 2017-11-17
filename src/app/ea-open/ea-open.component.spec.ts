import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaOpenComponent } from './ea-open.component';

describe('EaOpenComponent', () => {
  let component: EaOpenComponent;
  let fixture: ComponentFixture<EaOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
