import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennWorkCardComponent } from './jenn-work-card.component';

describe('JennWorkCardComponent', () => {
  let component: JennWorkCardComponent;
  let fixture: ComponentFixture<JennWorkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennWorkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennWorkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
