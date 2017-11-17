import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaServicesComponent } from './ea-services.component';

describe('EaServicesComponent', () => {
  let component: EaServicesComponent;
  let fixture: ComponentFixture<EaServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
