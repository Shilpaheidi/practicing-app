import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsStatusOverviewComponent } from './projects-status-overview.component';

describe('ProjectsStatusOverviewComponent', () => {
  let component: ProjectsStatusOverviewComponent;
  let fixture: ComponentFixture<ProjectsStatusOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsStatusOverviewComponent]
    });
    fixture = TestBed.createComponent(ProjectsStatusOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
