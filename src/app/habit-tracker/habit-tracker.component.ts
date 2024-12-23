import { Component } from '@angular/core';

@Component({
  selector: 'app-habit-tracker',
  templateUrl: './habit-tracker.component.html',
  styleUrls: ['./habit-tracker.component.scss']
})
export class HabitTrackerComponent {
  newHabit: string = '';
  habits: {
    name: string;
    days: boolean[];
    streak: number;
  }[] = [];

  addHabit() {
    if (this.newHabit.trim()) {
      this.habits.push({
        name: this.newHabit,
        days: Array(30).fill(false),
        streak: 0
      })

      this.newHabit = '';
    }
  }

  deleteHabit(index: number) {
    this.habits.splice(index, 1);
  }

  toggleDay(habitIndex: number, dayIndex: number) {

    const habit = this.habits[habitIndex];
    habit.days[dayIndex] = !habit.days[dayIndex];
    let streak = 0;
    for (let day of habit.days) {
      if (day) {
        streak++;
      } else {
        break;
      }
    }
    habit.streak = streak;
  }

}
