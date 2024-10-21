import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2DesignEvaluationComponent } from './part2-design-evaluation.component';

describe('Part2DesignEvaluationComponent', () => {
  let component: Part2DesignEvaluationComponent;
  let fixture: ComponentFixture<Part2DesignEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part2DesignEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part2DesignEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
