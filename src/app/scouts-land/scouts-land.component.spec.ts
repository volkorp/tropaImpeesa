import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutsLandComponent } from './scouts-land.component';

describe('ScoutsLandComponent', () => {
  let component: ScoutsLandComponent;
  let fixture: ComponentFixture<ScoutsLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoutsLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutsLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
