import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  title= '';
  message!: string;
  constructor() {}

  close() {
    // Code to close the modal can go here
    
  }
}
