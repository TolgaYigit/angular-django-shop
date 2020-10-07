import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoProductDetailsComponent } from './bo-product-details.component';

describe('BoProductDetailsComponent', () => {
  let component: BoProductDetailsComponent;
  let fixture: ComponentFixture<BoProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
