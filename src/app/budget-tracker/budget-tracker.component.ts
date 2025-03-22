import { transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-tracker',
  templateUrl: './budget-tracker.component.html',
  styleUrls: ['./budget-tracker.component.scss'],
})
export class BudgetTrackerComponent {
  transactions: { description: string; amount: number | null; type: string }[] =
    [];
  newTransaction = { description: '', amount: null, type: '' };
  totalIncome = 0;
  totalExpense = 0;
  balance = 0;

  addTransaction() {
    if (
      this.newTransaction.description &&
      this.newTransaction.amount &&
      this.newTransaction.type
    ) {
      this.transactions.push({ ...this.newTransaction });

      if (this.newTransaction.type === 'income') {
        this.totalIncome += this.newTransaction.amount;
      } else if (this.newTransaction.type === 'expense') {
        this.totalExpense += this.newTransaction.amount;
      }

      this.balance = this.totalIncome - this.totalExpense;
      this.newTransaction = { description: '', amount: null, type: '' };
    }
  }

  deleteTransaction(index: number) {
    const transaction = this.transactions[index];
    if (transaction.type === 'income') {
      this.totalIncome -= transaction.amount ?? 0;
    }

    this.balance = this.totalIncome - this.totalExpense;

    this.transactions.splice(index, 1);
  }
}

//javascript
// https://chatgpt.com/c/67487306-ec74-8005-b9b9-4bd1aad506a3

//nestjs
//https://chatgpt.com/c/67489162-0fac-8005-9c3d-7083e8763433

//mysql
//https://chatgpt.com/c/67489337-b690-8005-b3b2-d6b02901b184

//Angular projects

// https://chatgpt.com/c/67473e4e-1c64-8005-900b-2e52bea61774

//Data manipulation
//https://chatgpt.com/c/67489540-12e8-8005-a5e2-adbc7b852349

//ngrx
//https://chatgpt.com/c/67489c19-906c-8005-81b5-b9d590485251

//english
//https://chatgpt.com/c/674896f0-2ad4-8005-91a8-256abbec738f

//bootstrap
//https://chatgpt.com/c/674d1794-b27c-8005-a52a-54000bd46d7f

//Games
//https://chatgpt.com/c/6752df8f-b4d0-8005-ac58-62080337b7be

//Chat Gpt Api
//https://chatgpt.com/c/6752e053-2198-8005-a5d7-20f495cfb5f9

//Intermediate Angular Training
//https://chatgpt.com/c/6753ab4a-f8a0-8005-b31f-0aa604bca28c

//unit testing video
//  https://www.youtube.com/watch?v=emnwsVy8wRs&list=PLoC8Q0moRTSiTBAKWBGiJjFUMpiFdaGdF

//python tutorial
// https://www.youtube.com/watch?v=41qgdwd3zAg&list=PLS1QulWo1RIaJECMeUT4LFwJ-ghgoSH6n

//angular tasks
// https://chatgpt.com/c/6768f8f8-e390-8005-af7a-e9a1c28b0fac

// https://chatgpt.com/c/676e6ef0-e584-8005-b23b-f96f106d3128

// https://chatgpt.com/c/677badf6-075c-8005-8dce-1a3830231ccf

// Budget Tracker

// https://chat.deepseek.com/a/chat/s/5c06b0b0-d622-46cb-8732-1c2738305d2b
