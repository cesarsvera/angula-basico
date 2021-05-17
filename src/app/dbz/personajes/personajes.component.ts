import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
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
