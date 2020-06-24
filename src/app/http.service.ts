import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getBeer() {
    return this._http.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
  }
}
