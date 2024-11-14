import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSamplesComponent } from './check-samples.component';

describe('CheckSamplesComponent', () => {
  let component: CheckSamplesComponent;
  let fixture: ComponentFixture<CheckSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
