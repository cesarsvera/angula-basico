import { stringify } from '@angular/compiler/src/util';
import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America']
    Borrado: string = ''
    borrarHeroe(){
      
      this.Borrado = this.heroes.shift() || ''
    }
}
