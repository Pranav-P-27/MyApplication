import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusdetaileditComponent } from './cusdetailedit.component';

describe('CusdetaileditComponent', () => {
  let component: CusdetaileditComponent;
  let fixture: ComponentFixture<CusdetaileditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CusdetaileditComponent]
    });
    fixture = TestBed.createComponent(CusdetaileditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
