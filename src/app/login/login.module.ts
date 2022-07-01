import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ResponseHandlingService } from '../shared/services/response-handling.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
     ReactiveFormsModule,
     HttpClientModule,
  ],
  providers:[LoginService,ResponseHandlingService]
})
export class LoginModule { }
