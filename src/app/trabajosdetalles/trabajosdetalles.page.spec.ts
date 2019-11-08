import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosdetallesPage } from './trabajosdetalles.page';

describe('TrabajosdetallesPage', () => {
  let component: TrabajosdetallesPage;
  let fixture: ComponentFixture<TrabajosdetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajosdetallesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajosdetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
