import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page', //siempre empezar con app indicando que es perzonalizado
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {


//para hacer la inyecccion de la dependencias en el contructor
//se recomienda los servicios privados
constructor(private dbzService:DbzService){
}

get characters():Character[]{
  //creo una copia de los personajes con los 3 punts (...)
  return [...this.dbzService.characters];
}

onDeleteCharacter(id:string):void{
  this.dbzService.deleteCharacterByIde(id);
}

onNewCharacter(character:Character):void{
  this.dbzService.addCharacter(character);
}


}
