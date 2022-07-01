import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ResponseHandlingService } from '../services/response-handling.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  accessToken: any = '';
    constructor(private router: Router, private authService: AuthService,
        private responseHandler: ResponseHandlingService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.accessToken = localStorage.getItem('accessToken');
        if (this.accessToken != null) {
            // this.loaderService.show();
            if (this.authService.checkExpiryTime()) {
                this.refreshToken(request, next);
            }
            return this.HandleError(next, this.addAuthorizationHeader(request, this.accessToken));
        }

        return this.HandleError(next, request);
    }

    private addAuthorizationHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
        if (token) {
            return request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    // 'Content-Type': 'application/json'
                },
            });
        }
        return request;
    }

    private refreshToken(request: HttpRequest<any>, next: HttpHandler) {
        this.authService.refreshToken();
    }

    private HandleError(next: HttpHandler, request: HttpRequest<unknown>) {
        return next.handle(request).pipe(
            catchError(err => {
                this.responseHandler.handleError(err, new Map(), false, []);
                if (err.status == 500) {
                    // this.router.navigate(['/error']);
                }
                if (err.status == 401) {
                    this.router.navigate(['/access-denied']);
                }
                return throwError(() => { Error(err) });
                // return err;
            }));
    }
}
