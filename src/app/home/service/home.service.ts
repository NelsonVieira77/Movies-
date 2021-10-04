import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "assets/FILMES (3).JSON"

  constructor(
    private http: HttpClient
  ) { }

  consultar() {
    return this.http.get(this.url);
  }
}
