import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutproductComponent } from './ajoutproduct.component';

describe('AjoutproductComponent', () => {
  let component: AjoutproductComponent;
  let fixture: ComponentFixture<AjoutproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
