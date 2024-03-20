//Injectable es nuestro decorador
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

//le indica que es un servicio y que lo trate tal cual
@Injectable({providedIn: 'root'})
//va ser un singleton
export class DbzService {

  public characters:Character[]=[{
    id:uuid(),
    name:'Krillin',
    power:1000
  },{
    id:uuid(),
    name:'Goku',
    power:9500
  },{
    id:uuid(),
    name:'Vegeta',
    power:7500
  }];

  addCharacter(character:Character):void{
    // ...objeto le digo que exparsa los demas atributos y no esta escribiendo uno por uno
    const newCharacter:Character ={id:uuid(),...character}

    //agrego al final del arreglo
    this.characters.push(newCharacter);
  }
  //queda de ejemplo de otra forma
  // onDeleteCharacter(index:number){
  //   //elimino el registro por el indice
  //   //le digo que borre solo ese indice un elemento
  //   this.characters.splice(index,1);
  // }

  deleteCharacterByIde(id:string){
    //a filtrar cada uno de los elementos va retornar todos los que cumpla true
    this.characters=this.characters.filter(character=>character.id!==id);

  }



}
