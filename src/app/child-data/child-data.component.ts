import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.scss']
})
export class ChildDataComponent {
 parentData:any = "Hey I am form Child Component";
}
