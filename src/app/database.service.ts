import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getActors() {
    return this.http.get('/actors');
  }

  addActor(actor) {
   return this.http.post('/actors', actor,httpOptions);
  }

}
