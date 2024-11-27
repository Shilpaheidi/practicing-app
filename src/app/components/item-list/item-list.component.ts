import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  fixed:boolean = true;
  // private _formBuilder = inject(FormBuilder);
  // options = this._formBuilder.group({

  //   fixed: true,

  // });
}
