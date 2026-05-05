import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-interactive-dashboard',
  templateUrl: './interactive-dashboard.component.html',
  styleUrls: ['./interactive-dashboard.component.scss']
})
export class InteractiveDashboardComponent implements OnInit {
  availableWidgets = ['weather', 'todo', 'calendar', 'chart'];
  widgets: string[] = [];
  
  ngOnInit() {
    const saved = localStorage.getItem('widgets');
      this.widgets = saved ? JSON.parse(saved) : ['weather', 'todo'];
     
  }

  drop(event: CdkDragDrop<string[]>):void {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
    this.saveWidgets();
  }
 
  addWidget(widget: string) {
    if (!this.widgets.includes(widget)) {
      this.widgets.push(widget);
      this.saveWidgets();
    }
  }

  removeWidget(widget: string) {
    this.widgets = this.widgets.filter(w => w !== widget);
    this.saveWidgets();
  }

  saveWidgets() {
    localStorage.setItem('widgets', JSON.stringify(this.widgets));
  }
}
