import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproductComponent } from './detailproduct.component';

describe('DetailproductComponent', () => {
  let component: DetailproductComponent;
  let fixture: ComponentFixture<DetailproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
