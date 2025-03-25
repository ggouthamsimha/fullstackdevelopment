import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Use CommonModule for feature modules
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveformex',
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './reactiveformex.component.html',
  styleUrl: './reactiveformex.component.css'
})
export class ReactiveformexComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
alert(this.userForm.value);

    } else {
      console.log('Form is invalid');
    }
  }
}