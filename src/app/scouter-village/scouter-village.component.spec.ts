import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScouterVillageComponent } from './scouter-village.component';

describe('ScouterVillageComponent', () => {
  let component: ScouterVillageComponent;
  let fixture: ComponentFixture<ScouterVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScouterVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScouterVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
