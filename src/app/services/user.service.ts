import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) { }

  findById(idUser: number) {
    return this.http.get('/api/user/' + idUser);
  }

}
