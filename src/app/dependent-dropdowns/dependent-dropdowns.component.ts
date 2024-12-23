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
     this.items = this.data[category] || [];
     this.form.get('item')?.reset();
  }

  onSubmit():void{
      if (this.form.valid) {
        
      }
  }

}
