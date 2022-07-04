import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import jwt_decode from 'jwt-decode';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isRefreshingToken: any;
  constructor(private http: HttpClient) {
    setInterval(() => {
      this.checkExpiryTime();
    }, environment.refreshTokenInternal)
  }
  checkExpiryTime(): any {
    if (!this.isAuthenticated()) return;
    let currentTimeMillis = new Date().getTime();
    let expirationTimeMillis = new Date(this.getTokenExpiration() * 1000).getTime();
    const issueTimeMs = new Date(this.getTokenIssueTime() * 1000).getTime();
    const timeElapsed = currentTimeMillis - issueTimeMs;
    const timeRemaining = expirationTimeMillis - currentTimeMillis;
    if (timeElapsed > timeRemaining && !this.isRefreshingToken) {
      // this.refreshToken(); // TODO - when refersh tocken logic needed just unccomment it and update api
    }
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token === null || token === 'null' || token === undefined || token === 'undefined') {
      return false;
    } else {
      return true;
    }
  }
  getTokenExpiration(): any {
    if (this.isAuthenticated()) {
      let authInfo: any = jwt_decode(this.getToken());
      if (authInfo.exp) { return authInfo.exp as number };
    }
    return null;
  }
  getTokenIssueTime(): any {
    if (this.isAuthenticated()) {
      let authInfo: any = jwt_decode(this.getToken());
      if (authInfo.nbf) { return authInfo.nbf as number };
    }
    return null;
  }
  getToken(): any {
    return localStorage.getItem('accessToken');
  }

  refreshToken() { // TODO - 
    this.isRefreshingToken = true;
    const refreshToken = localStorage.getItem('refreshToken');
    const url = `${environment.API_URL}auth/refresh-token`;
    const body = {
      refreshToken: `${refreshToken}`
    };
    this.http.post<TokenModel>(url, body).subscribe(response => {
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      this.isRefreshingToken = false;
    });
  }
}
