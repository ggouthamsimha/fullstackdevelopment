import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { Router } from  '@angular/router';

@Component({
  selector: 'app-bgs',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './bgs.component.html',
  styleUrl: './bgs.component.css'
})
export class BgsComponent {
  user = {
    name: '',
    email: '',
    password: '',
    address:''
  };
  
  constructor(private http: HttpClient, private router: Router) {}
// Calling Registration API end point
  registrationSubmit() {
    console.log(this.user);
    this.http.post('http://localhost:8080/api/users/register', this.user,{ responseType: 'text' }).subscribe({
      next: (data: any) => {
        console.log("Success")
        alert(data);
        this.router.navigate(['/dashboard']);
      },
      
      error: () => {
        alert("API Failure")
      },
    });
  }
}

function registrationSubmit() {
  throw new Error('Function not implemented.');
}
