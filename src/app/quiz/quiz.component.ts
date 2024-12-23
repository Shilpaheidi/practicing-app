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
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 2,
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      options: ['Oxygen', 'Osmium', 'Oxide', 'Ozone'],
      answer: 0,
    },
    {
      question: 'How many continents are there on Earth?',
      options: ['5', '6', '7', '8'],
      answer: 2,
    },
    {
      question: 'What is the capital city of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      answer: 0,
    },
    {
      question: 'What is the square root of 64?',
      options: ['6', '7', '8', '9'],
      answer: 2,
    },
    {
      question: 'Which organ is responsible for pumping blood throughout the body?',
      options: ['Brain', 'Lungs', 'Heart', 'Liver'],
      answer: 2,
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
      answer: 1,
    },
    {
      question: 'What is the boiling point of water in Celsius?',
      options: ['90°C', '100°C', '110°C', '120°C'],
      answer: 1,
    },
    {
      question: 'Which gas do plants absorb from the atmosphere for photosynthesis?',
      options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
      answer: 2,
    },
    {
      question: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      answer: 2,
    }
    
  ];

  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  score = 0;
  quizCompleted = false;
  selectOption(index: number) {
    console.log('index', index);
    
    this.selectedOptionIndex = index;
  }


  nextQuestion() {

    console.log('this.selectedOptionIndex',this.selectedOptionIndex);
    console.log('this.questions[this.currentQuestionIndex].answer',this.questions[this.currentQuestionIndex].answer);
    console.log('this.currentQuestionIndex',this.currentQuestionIndex);
    
    
    
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
