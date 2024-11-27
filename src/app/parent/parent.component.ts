import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentMessage: string = '';

  constructor(private datasharingservice: DataSharingService) {

  }

  ngOnInit(){
    this.parentMessage = this.datasharingservice.getData();
  }

  updateMessageInService(){
    this.datasharingservice.setData('Updated from parent component!!!');
    this.parentMessage = this.datasharingservice.getData();
  }
}
