import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtCalendarComponent } from './yacht-calendar.component';

describe('YachtCalendarComponent', () => {
  let component: YachtCalendarComponent;
  let fixture: ComponentFixture<YachtCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YachtCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YachtCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
