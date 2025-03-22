import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {
  newMessage: string = '';
  @Output() messageSent = new EventEmitter<string>();
  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageSent.emit(this.newMessage);
      this.newMessage = '';
    } else {
      console.log('Message cannot be empty');

    }

  }
}
