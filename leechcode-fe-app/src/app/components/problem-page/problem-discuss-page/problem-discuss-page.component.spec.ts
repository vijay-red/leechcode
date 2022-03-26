import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemDiscussPageComponent } from './problem-discuss-page.component';

describe('ProblemDiscussPageComponent', () => {
  let component: ProblemDiscussPageComponent;
  let fixture: ComponentFixture<ProblemDiscussPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemDiscussPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemDiscussPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
