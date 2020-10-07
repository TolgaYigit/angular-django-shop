import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoProductListComponent } from './bo-product-list.component';

describe('BoProductListComponent', () => {
  let component: BoProductListComponent;
  let fixture: ComponentFixture<BoProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
