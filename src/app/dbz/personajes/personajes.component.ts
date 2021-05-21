
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input('data') personaje: Personaje [] = []

  get personaje() {
    return this.dbzsrvice.personaje;
  }

  constructor(private dbzsrvice: DbzService){}

}
