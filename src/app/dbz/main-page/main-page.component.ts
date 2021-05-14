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

nuevo: Personaje = {
  nombre: 'Trunks',
  poder: 14000

}

agregar( ){
  
  console.log(this.nuevo);
}

// cambiarNombre(event: any){
//   console.log(event.target.value)
// } ya no se necesita porque se utilizo el ngModel
}
