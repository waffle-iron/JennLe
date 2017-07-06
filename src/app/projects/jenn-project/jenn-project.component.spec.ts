import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennProjectComponent } from './jenn-project.component';

describe('JennProjectComponent', () => {
  let component: JennProjectComponent;
  let fixture: ComponentFixture<JennProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
