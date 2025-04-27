import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Output() cardClicked: EventEmitter<string> = new EventEmitter();
  onCardClick(): void {
    this.cardClicked.emit(this.title);
  }
}
