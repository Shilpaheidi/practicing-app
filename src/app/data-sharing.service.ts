import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {


  private data:string = 'Hello from service!!';
  constructor() { }

  getData():string{
    return this.data;
  }

  setData(newData:string):void{

    this.data =  newData;

  }
}
