import { Component } from '@angular/core';
import { DataSavingService } from '../data-saving.service';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent {

  message:string = '';

  constructor(private dataSavingService:DataSavingService){

  }


  ngOnInit(){
    this.dataSavingService.currentMessage.subscribe((message)=>{
      this.message =  message;
    })
  }
}
