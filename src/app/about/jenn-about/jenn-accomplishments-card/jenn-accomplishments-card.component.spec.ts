import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennAccomplishmentsCardComponent } from './jenn-accomplishments-card.component';

describe('JennAccomplishmentsCardComponent', () => {
  let component: JennAccomplishmentsCardComponent;
  let fixture: ComponentFixture<JennAccomplishmentsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennAccomplishmentsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennAccomplishmentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
