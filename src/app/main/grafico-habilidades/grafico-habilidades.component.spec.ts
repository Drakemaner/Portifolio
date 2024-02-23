import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoHabilidadesComponent } from './grafico-habilidades.component';

describe('GraficoHabilidadesComponent', () => {
  let component: GraficoHabilidadesComponent;
  let fixture: ComponentFixture<GraficoHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
