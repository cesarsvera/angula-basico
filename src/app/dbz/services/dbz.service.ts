import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{

    
    
    private _personaje: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 100000
        },
        {
          nombre: 'Vegeta',
          poder: 999999
        }
    
      ];


      get personaje():Personaje[]{
         return [...this._personaje];
      }

    constructor(){ }


    agregarPersonaje(personaje:Personaje){
        this._personaje.push(personaje);
    }

}