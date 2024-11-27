import { Injectable } from '@angular/core';
import { Item } from '../item.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemList: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
  ];

 private itemSubject =  new BehaviorSubject<Item[]>(this.itemList);
 items$ =  this.itemSubject.asObservable();
  constructor() { }

  getItems(): Observable<Item[]>{
    return this.items$;
  }

addItem(item:Item):void{
this.itemList.push({...item, id: this.itemList.length +  1});
this.itemSubject.next(this.itemList);
}

updateItem(updateItem: Item): void{
  const index =  this.itemList.findIndex(item => item.id  === updateItem.id)
}
}
