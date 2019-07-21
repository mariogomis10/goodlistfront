import { Component, OnInit } from '@angular/core';
import {Liste} from '../model/Liste';
import {ListeService} from '../services/liste.service';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.scss']
})
export class ListesComponent implements OnInit {

  listes: Liste[];
  constructor(private listeService: ListeService) { }

  ngOnInit() {
    this.listes = [];
    this.listeService.getListes().subscribe(
    (data: Liste[]) => { this.listes = data; },
      () => { alert('Erreur lc1'); }
    );
  }

}
