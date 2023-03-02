import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: ApiService) {}

  //Get authorization
  public getAuthorize(): Observable<string> {
    return this.http.get<string>('authorize').pipe(
      tap((e) => console.log('success')),
      catchError(this.http.handleError<string>('authorize'))
    );
  }

  public getToken(code: string): Observable<any> {
    return this.http.get<string>(`token/${code}`).pipe(
      tap(() => console.log('success')),
      catchError(this.http.handleError<string>('get token'))
    );
  }
}
