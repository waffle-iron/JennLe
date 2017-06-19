import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennMeCardComponent } from './jenn-me-card.component';

describe('JennMeCardComponent', () => {
  let component: JennMeCardComponent;
  let fixture: ComponentFixture<JennMeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennMeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennMeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
