import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Liste} from '../model/Liste';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  constructor(private http: HttpClient) { }

  public getListes() {
    return this.http.get('/api/liste');
  }

  public deleteListe(idListe: number) {
    return this.http.delete('/api/liste/' + idListe);
  }

  public addListe(liste: Liste) {
    return this.http.post('/api/user/2/liste', liste);
  }
}
