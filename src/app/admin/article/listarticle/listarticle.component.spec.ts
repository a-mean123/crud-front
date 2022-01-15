import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarticleComponent } from './listarticle.component';

describe('ListarticleComponent', () => {
  let component: ListarticleComponent;
  let fixture: ComponentFixture<ListarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
