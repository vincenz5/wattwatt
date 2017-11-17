import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaAboutComponent } from './ea-about.component';

describe('EaAboutComponent', () => {
  let component: EaAboutComponent;
  let fixture: ComponentFixture<EaAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
