import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { NonAuthGuard } from './shared/guard/non-auth.guard';
import { HttpTokenInterceptor } from './shared/interceptors/http-token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,NonAuthGuard, { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
