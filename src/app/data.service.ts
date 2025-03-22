import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  // Example API call for users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  // Example API call for posts
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
