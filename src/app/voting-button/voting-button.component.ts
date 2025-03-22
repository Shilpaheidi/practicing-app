import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voting-button',
  templateUrl: './voting-button.component.html',
  styleUrls: ['./voting-button.component.scss']
})
export class VotingButtonComponent {
  @Input() candidateName!: string;
  @Output() vote = new EventEmitter<string>();
  castVote(){
    this.vote.emit(this.candidateName);
  }
}
