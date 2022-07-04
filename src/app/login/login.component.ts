import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  errorResponse: any = { status: 0, message: '' };
  isErrorFound!: boolean;
  passType: string = 'password';

  get f() {
      return this.loginForm.controls;
  }
  constructor(public router: Router,private formBuilder: FormBuilder,private loginService:LoginService) {

  }

  ngOnInit() {
      document.getElementById('userName')?.focus();
      this.loginForm = this.formBuilder.group({
        email: new FormControl('', [
              Validators.required,
              Validators.minLength(2),
            //   Validators.maxLength(20),
          ]),
          password: new FormControl('', [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(30),
          ])
      });

  }
  show_button: Boolean = false;
  show_eye: Boolean = false;

  //Function
  showPassword() {
      this.show_button = !this.show_button;
      this.show_eye = !this.show_eye;
  }

  onSubmit() {

      this.submitted = true;
      this.isErrorFound = false;
      if (this.loginForm.valid) {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
        //   this.loginService.signin(this.loginForm.value).subscribe({
        //       next: (response: any) => {
        //           localStorage.setItem('isLoggedin', 'true');
        //           localStorage.setItem('userInfo', JSON.stringify(response));
        //           localStorage.setItem('accessToken', response.accessToken);
        //       },
        //       error: () => {
        //           this.isErrorFound = true;
        //           this.errorResponse.message = 'Invalid Username or Password!';
        //       },
        //       complete: () => {
        //           setTimeout(() => {
        //               this.router.navigate(['/dashboard']);
        //           }, 200);
        //       }
        //   })

      }
  }
}
