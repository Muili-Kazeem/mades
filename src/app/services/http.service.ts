import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getRequest<T>(
    endpoint: string,
    baseUrl: string = environment.endPoint
  ): Observable<T> | any {
    return this.http.get(baseUrl + endpoint);
  }

  getRequestWithParams<T>(
    endpoint: string,
    params = {},
    baseUrl = environment.endPoint
  ): Observable<T> | any {
    return this.http.get(baseUrl + endpoint, {
      params,
    });
  }

}
