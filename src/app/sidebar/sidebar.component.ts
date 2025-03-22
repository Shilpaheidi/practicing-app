import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  form: FormGroup;

  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectAll: new FormControl(false, { nonNullable: true }), // ✅ Ensures only boolean values
      items: new FormArray<FormControl<boolean>>(
        this.items.map(() => new FormControl<boolean>(false, { nonNullable: true })) // ✅ Ensures only boolean values
      )
    });

    this.form.get('items')?.valueChanges.subscribe(() => this.updateSelectAll());
  }

  toggleSelectAll() {
    const selectAllChecked = this.form.get('selectAll')?.value;
    this.itemsArray.setValue(this.items.map(() => selectAllChecked));
  }

  updateSelectAll() {
    const allChecked = this.itemsArray.controls.every(control => control.value === true);
    this.form.get('selectAll')?.setValue(allChecked, { emitEvent: false });
  }

  get itemsArray(): FormArray<FormControl<boolean>> {
    return this.form.get('items') as FormArray<FormControl<boolean>>;
  }

  // ✅ Function to get selected items
  getSelectedItems(): { id: number; name: string }[] {
    return this.items.filter((_, index) => this.itemsArray.controls[index].value);
  }

  
}
