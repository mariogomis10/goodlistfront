import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Liste} from '../model/Liste';
import {ListeService} from '../services/liste.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  @Input() liste: Liste;
  @Output() refreshListe = new EventEmitter<boolean>();
  constructor(private listeService: ListeService) { }

  ngOnInit() {
  }

  supprimer(idListe: number) {
    this.listeService.deleteListe(idListe).subscribe(
      () => { this.refreshListe.emit(); },
      (respons) => { alert('La liste n\'as pas pue être supprimer.'); }
    );
  }
}
