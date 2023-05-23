import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApifetchService {

  constructor(private _http: HttpClient) { }

  getData(page: number = 1){
    return this._http.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  }
}
