import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennResearchComponent } from './jenn-research.component';

describe('JennResearchComponent', () => {
  let component: JennResearchComponent;
  let fixture: ComponentFixture<JennResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
