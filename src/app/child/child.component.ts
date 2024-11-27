import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  childMessage: string = '';
  constructor(private dataSharingService: DataSharingService) {}
  ngOnInit(){
    this.childMessage = this.dataSharingService.getData();
  }

  updateMessageInService(){
    this.dataSharingService.setData('Updated data from child component!!');
    this.childMessage = this.dataSharingService.getData();
  }
}
