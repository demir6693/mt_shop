import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  token: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidXNlciIsInBhc3dvcmQiOiJ1c2VyMTIzIn0sImlhdCI6MTU0NDcyNTM3Mn0.1b1Lq3sec6ZJ9wLSJPMwcDChN5XNMr9OHePhWEmuwz8";
  getEmpData: any = [];
  login_bool: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private cookieUser: CookieService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: new FormControl()
    });


    var user_local = localStorage.getItem('user');
    console.log(user_local);
   
  }

  get f() { return this.registerForm.controls; }

  onSubmit() 
  {
   this.submitted = true;

    if(this.registerForm.invalid)
    {
      return;
    }
    
    const header = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token);

    this.http.post('http://localhost:3000/racuni/login' ,
    JSON.stringify({
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    }),
      { 
      headers: header
      }
    )
    .subscribe(data => {
  
      if(!data)
      {
          console.log(data);
          this.login_bool = false;
      }
      else
      {
        if(this.registerForm.value.remember)
          {
            localStorage.setItem('user', data[0]);
          }
          else
          {
            this.cookieUser.set('user', data[0]['ime']);
          }
          this.login_bool = true;
      }
      
      //location.reload();
    });
  }

}
