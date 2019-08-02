import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarChamadoReactiveComponent } from './criar-chamado-reactive.component';

describe('CriarChamadoReactiveComponent', () => {
  let component: CriarChamadoReactiveComponent;
  let fixture: ComponentFixture<CriarChamadoReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarChamadoReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarChamadoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
