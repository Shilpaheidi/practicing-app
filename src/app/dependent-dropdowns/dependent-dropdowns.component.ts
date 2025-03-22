import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dependent-dropdowns',
  templateUrl: './dependent-dropdowns.component.html',
  styleUrls: ['./dependent-dropdowns.component.scss']
})
export class DependentDropdownsComponent {
  form!: FormGroup;
  categories: string[] = ['Fruits', 'Vegetables', 'Dairy'];
  items: string[] = [];
  data:{[key:string]:string[]} = {
    Fruits: ['Apple', 'Banana', 'Orange'],
    Vegetables: ['Carrot', 'Broccoli', 'Spinach'],
    Dairy: ['Milk', 'Cheese', 'Yogurt']
  }

  submittedData:{category:string, item:string} | null =  null;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      category: ['', Validators.required],
      item: ['', Validators.required]
    });
  }

  onCategoryChange(category:string):void{
    console.log('category', category);
    
     this.items = this.data[category] || [];

     console.log('this.data[category]', this.data[category]);
     this.form.get('item')?.reset();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submittedData = this.form.value;
      console.log('Submitted Data:', this.form.value);
    }
  }

  resetForm(): void {
    this.form.reset();
    this.items = [];
    this.submittedData = null;
  }

  // https://chatgpt.com/c/67695de9-ea28-8005-a9f2-30738d6a456b


}
