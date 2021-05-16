import { Component, OnInit, Input } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';



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

    nuevo: Personaje ={
      nombre: "Krilin",
      poder: 30000
    }


    agregarNuevoPersonaje(argumento: Personaje){
      this.personaje.push(argumento)
    }


  

  // cambiarNombre(event: any){
  //   console.log(event.target.value)
  // } ya no se necesita porque se utilizo el ngModel
}
 