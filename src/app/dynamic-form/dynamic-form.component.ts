import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  dynamicForm!: FormGroup;
  constructor(private fb: FormBuilder) {

    this.dynamicForm = this.fb.group({
      controlsArray:this.fb.array([])
    })
  }

  get ControlsArray(): FormArray {
      return this.dynamicForm.get('controlsArray')  as FormArray;
  }

  addControl():void {
    const newGroup = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      email:['', [Validators.required,Validators.email]]

    })

    this.ControlsArray.push(newGroup);
  }

  removeControl(index:number){
      this.ControlsArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      console.log('Form Submitted', this.dynamicForm.value);
    }
  }
}
