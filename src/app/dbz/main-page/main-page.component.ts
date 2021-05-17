import { Component, OnInit, Input } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


 

    nuevo: Personaje ={
      nombre: "Krilin",
      poder: 30000
    }


    // get personaje(): Personaje[] {
    //   return this.dbzservice.personaje;
    // }


    // agregarNuevoPersonaje(argumento: Personaje){
    //   this.personaje.push(argumento);
    // }


    constructor( ){}


  

  // cambiarNombre(event: any){
  //   console.log(event.target.value)
  // } ya no se necesita porque se utilizo el ngModel
}
 