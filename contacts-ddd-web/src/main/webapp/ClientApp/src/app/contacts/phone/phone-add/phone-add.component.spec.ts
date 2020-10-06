import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAddComponent } from './phone-add.component';

describe('PhoneAddComponent', () => {
  let component: PhoneAddComponent;
  let fixture: ComponentFixture<PhoneAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
