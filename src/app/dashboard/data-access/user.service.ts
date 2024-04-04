import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEndpointResponse } from 'src/app/models/endPointResponse.model';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpService,
  ) { }

  public getUsers(page?: number): Observable<IEndpointResponse> {
    const endpoint = `users`;
    const params: HttpParams = new HttpParams().set('page', page ? page.toString() : '');
    return this.http.getRequestWithParams(endpoint, params);
  }

  public getSingleUser(id: number): Observable<IEndpointResponse> {
    const endpoint = `users/${id}`;
    return this.http.getRequest(endpoint);
  }
}
