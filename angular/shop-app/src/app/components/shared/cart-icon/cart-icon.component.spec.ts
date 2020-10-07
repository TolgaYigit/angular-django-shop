import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CartIconComponent} from './cart-icon.component';

describe('CartComponent', () => {
  let component: CartIconComponent;
  let fixture: ComponentFixture<CartIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
