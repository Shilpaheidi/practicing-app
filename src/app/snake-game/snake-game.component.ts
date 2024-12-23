import { Component } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent {
  grid: any[] = [];
  snake: { x: number, y: number }[] = [{ x: 5, y: 5 }];
  food: { x: number, y: number } = { x: 8, y: 8 };
  direction: string = 'RIGHT';
  gameSpeed = 200; // Speed in ms (lower is faster)
  gameInterval!: Subscription;


  ngOnInit(): void {
    this.createGrid();
    console.log(this.grid); // Debug: check if grid is created
    this.startGame();
    this.handleKeyPress();
  }



  createGrid(): void {
    this.grid = Array(20).fill(null).map(() => Array(20).fill(null));

  }
  startGame(): void {
    this.gameInterval = interval(this.gameSpeed)
      .pipe(map(() => this.updateSnakePosition()))
      .subscribe();

      console.log('GameInterval', this.gameInterval);
      
  }

  updateSnakePosition(): void {
    let newHead = { ...this.snake[0] };

    switch (this.direction) {
      case 'UP':
        newHead.y -= 1;
        break;
      case 'DOWN':
        newHead.y += 1;
        break;
      case 'LEFT':
        newHead.x -= 1;
        break;
      case 'RIGHT':
        newHead.x += 1;
        break;
    }

    this.snake.unshift(newHead); // Add new head to the snake

    // Check if snake ate the food
    if (this.food.x === newHead.x && this.food.y === newHead.y) {
      this.spawnFood();
    } else {
      this.snake.pop(); // Remove tail if no food eaten
    }

    // Check collision with walls or self
    if (this.checkCollision(newHead)) {
      this.gameInterval.unsubscribe();
      alert('Game Over! Press F5 to restart.');
    }
  }

  checkCollision(head: { x: number, y: number }): boolean {
    // Collision with walls
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
      return true;
    }

    // Collision with itself
    for (let i = 1; i < this.snake.length; i++) {
      if (this.snake[i].x === head.x && this.snake[i].y === head.y) {
        return true;
      }
    }

    return false;
  }

  spawnFood(): void {
    this.food = {
      x: Math.floor(Math.random() * 20),
      y: Math.floor(Math.random() * 20)
    };
  }

  isSnake(x: number, y: number): boolean {

    console.log('x and y', x,y);
    
    return this.snake.some(segment => segment.x === x && segment.y === y);
  }

  isFood(x: number, y: number): boolean {
    return this.food.x === x && this.food.y === y;
  }

  handleKeyPress(): void {
    window.addEventListener('keydown', (event) => {

      console.log('keyCheck', event.key);
      
      switch (event.key) {
        case 'ArrowUp':
          if (this.direction !== 'DOWN') this.direction = 'UP';
          break;
        case 'ArrowDown':
          if (this.direction !== 'UP') this.direction = 'DOWN';
          break;
        case 'ArrowLeft':
          if (this.direction !== 'RIGHT') this.direction = 'LEFT';
          break;
        case 'ArrowRight':
          if (this.direction !== 'LEFT') this.direction = 'RIGHT';
          break;
      }
    });
  }


}
