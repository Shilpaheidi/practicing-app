import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss']
})
export class ChatHistoryComponent {
  messages: string[] = [];
  handleMessage(message:string){
    this.messages.push(message);
  }
}
