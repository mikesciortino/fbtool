import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrabDraftComponent } from './grab-draft.component';

describe('GrabDraftComponent', () => {
  let component: GrabDraftComponent;
  let fixture: ComponentFixture<GrabDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrabDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
