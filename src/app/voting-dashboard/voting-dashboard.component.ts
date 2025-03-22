import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-dashboard',
  templateUrl: './voting-dashboard.component.html',
  styleUrls: ['./voting-dashboard.component.scss']
})
export class VotingDashboardComponent {
  candidates = [
    { name: 'Candidate A', votes: 0 },
    { name: 'Candidate B', votes: 0 },
    { name: 'Candidate C', votes: 0 },
  ];

  handleVote(candidateName: string) {
    const candidate = this.candidates.find(c => c.name === candidateName);

    if (candidate) {
      candidate.votes++;
      console.log(`${candidateName} received a vote!`);
    }

  }
}
