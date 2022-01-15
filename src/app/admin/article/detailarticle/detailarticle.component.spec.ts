import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailarticleComponent } from './detailarticle.component';

describe('DetailarticleComponent', () => {
  let component: DetailarticleComponent;
  let fixture: ComponentFixture<DetailarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
