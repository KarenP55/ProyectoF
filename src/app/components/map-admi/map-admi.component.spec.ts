import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAdmiComponent } from './map-admi.component';

describe('MapAdmiComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapAdmiComponent],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MapAdmiComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(MapAdmiComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(MapAdmiComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
