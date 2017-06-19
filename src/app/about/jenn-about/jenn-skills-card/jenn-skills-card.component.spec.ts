import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennSkillsCardComponent } from './jenn-skills-card.component';

describe('JennSkillsCardComponent', () => {
  let component: JennSkillsCardComponent;
  let fixture: ComponentFixture<JennSkillsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennSkillsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennSkillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
