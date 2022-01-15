import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailuserComponent } from './detailuser.component';

describe('DetailuserComponent', () => {
  let component: DetailuserComponent;
  let fixture: ComponentFixture<DetailuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
