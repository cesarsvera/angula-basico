import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

interface Personaje{
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  personaje: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 100000
    },
    {
      nombre: 'Vegeta',
      poder: 999999
    }

  ];


  nuevo: Personaje = {
    nombre: '',
    poder: 0

  }

  agregar(){
    
    if( this.nuevo.nombre.trim().length === 0 ){
      return;
    }
    console.log(this.nuevo);
    this.personaje.push(this.nuevo)
    this.nuevo = {nombre: '', poder: 0}

  }

  // cambiarNombre(event: any){
  //   console.log(event.target.value)
  // } ya no se necesita porque se utilizo el ngModel
}
 