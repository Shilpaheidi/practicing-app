import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-snake-board-game',
  templateUrl: './snake-board-game.component.html',
  styleUrls: ['./snake-board-game.component.scss']
})
export class SnakeBoardGameComponent {
  @ViewChild('gameCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private direction = { x: 1, y: 0 };
  private food = { x: 0, y: 0 };
  private boxSize = 20;
  private gameInterval: any;
  private boardSize = 400;

  ngOnInit(){
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.resetGame();
  }
  startGame() {

  }

  resetGame() {

  }
}
