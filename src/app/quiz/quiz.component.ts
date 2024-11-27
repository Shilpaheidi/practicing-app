import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      answer: 2,
    },
    {
      question: 'Which programming language is known as the language of the web?',
      options: ['Python', 'JavaScript', 'C++', 'Ruby'],
      answer: 1,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      answer: 1,
    },
  ];

  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  score = 0;
  quizCompleted = false;
  selectOption(index: number) {
    this.selectedOptionIndex = index;
  }


  nextQuestion() {
    if (this.selectedOptionIndex === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }

    this.selectedOptionIndex = null;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.quizCompleted = true;
    }
  }

  prevQuestion() {
    this.currentQuestionIndex--;
    this.selectedOptionIndex = null;
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.selectedOptionIndex = null;
    this.score = 0;
    this.quizCompleted = false;
  }
}
