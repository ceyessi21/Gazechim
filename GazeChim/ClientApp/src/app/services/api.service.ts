import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //Basic get function
  public get<TResult>(
    url: string,
    queryString: any = null
  ): Observable<TResult> {
    var url = this.createUrl(url);
    if (queryString != null) {
      url += '?' + queryString;
    }
    return this.http.get<TResult>(url);
  }

  // Instanciate URL
  public createUrl(url: string): string {
    return environment.api_url + 'api/' + url;
  }

  //Error handler
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      //Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
