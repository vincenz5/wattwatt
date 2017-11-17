import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaIndustriesComponent } from './ea-industries.component';

describe('EaIndustriesComponent', () => {
  let component: EaIndustriesComponent;
  let fixture: ComponentFixture<EaIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
