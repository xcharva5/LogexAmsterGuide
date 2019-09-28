import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesSwitchComponent } from './places-switch.component';

describe('PlacesSwitchComponent', () => {
  let component: PlacesSwitchComponent;
  let fixture: ComponentFixture<PlacesSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
