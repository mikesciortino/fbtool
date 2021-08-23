import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanksToolComponent } from './ranks-tool.component';

describe('RanksToolComponent', () => {
  let component: RanksToolComponent;
  let fixture: ComponentFixture<RanksToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanksToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RanksToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
