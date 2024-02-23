import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesConteinerComponent } from './images-conteiner.component';

describe('ImagesConteinerComponent', () => {
  let component: ImagesConteinerComponent;
  let fixture: ComponentFixture<ImagesConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesConteinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
