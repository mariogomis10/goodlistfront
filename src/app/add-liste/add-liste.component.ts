import { Component, OnInit } from '@angular/core';
import {Liste} from '../model/Liste';
import {ListeService} from '../services/liste.service';
import {Router} from '@angular/router';
import {User} from '../model/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-add-liste',
  templateUrl: './add-liste.component.html',
  styleUrls: ['./add-liste.component.scss']
})
export class AddListeComponent implements OnInit {

  liste: Liste = new Liste();
  user: User = new User();

  constructor(private listeService: ListeService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  save() {
    this.user.id = 2;
    this.liste.user = this.user;
    this.listeService.addListe(this.liste).subscribe(
      () => { this.router.navigate(['/listes']); },
      (reponse) => { alert('Erreur alc1'); }
    );
  }
}
