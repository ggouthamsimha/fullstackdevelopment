import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification',
  imports: [FormsModule,CommonModule, ReactiveFormsModule ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})

export class NotificationComponent {
  username: string = ''; 
  registrationForm: any;

    inputValue: string = '';
    usernames: string[] = ['Alice', 'Bob', 'Charlie', 'David']






    
  }
  




 


