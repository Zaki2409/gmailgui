import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EamilComponent } from './eamil.component';

describe('EamilComponent', () => {
  let component: EamilComponent;
  let fixture: ComponentFixture<EamilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EamilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EamilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
