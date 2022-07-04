import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  signin(reqObject: any): Observable<any> {
    let headers =  new HttpHeaders({
      'Content-Type':  'application/json',
    });
    // headers: new HttpHeaders({
    //   'Content-Type':  'application/json',
    //   Authorization: 'my-auth-token'
    // })
    return this.http.post<any>(environment.API_URL +"auth/token",reqObject, {headers:headers});
  }
}
