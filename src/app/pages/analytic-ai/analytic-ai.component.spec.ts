import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticAiComponent } from './analytic-ai.component';

describe('AnalyticAiComponent', () => {
  let component: AnalyticAiComponent;
  let fixture: ComponentFixture<AnalyticAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
