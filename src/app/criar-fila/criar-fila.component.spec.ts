import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFilaComponent } from './criar-fila.component';

describe('CriarFilaComponent', () => {
  let component: CriarFilaComponent;
  let fixture: ComponentFixture<CriarFilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarFilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
