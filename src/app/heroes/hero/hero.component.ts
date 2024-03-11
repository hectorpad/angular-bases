import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string ='ironman';
  public age:number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  //si no se pone public por defecto se entiende q es publico
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name='Spiderman';
  }

  changeAge():void{
    this.age=25;
  }

  resetForm():void{
    this.name='ironman';
    this.age=45;
  }
}
