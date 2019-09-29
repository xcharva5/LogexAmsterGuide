import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSwitchComponent } from './events-switch.component';

describe('EventsSwitchComponent', () => {
  let component: EventsSwitchComponent;
  let fixture: ComponentFixture<EventsSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
