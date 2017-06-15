import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennNavComponent } from './jenn-nav.component';

describe('JennNavComponent', () => {
  let component: JennNavComponent;
  let fixture: ComponentFixture<JennNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'JENN LE'`, async(() => {
    const fixture = TestBed.createComponent(JennNavComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('JENN LE');
  }));

  it('should render title as well as all the menu options in a tags', async(() => {
    const fixture = TestBed.createComponent(JennNavComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('JENN LE');
  }));
});
