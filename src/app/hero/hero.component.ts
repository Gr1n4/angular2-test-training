import { Component } from '@angular/core';

// import {Observable} from "rxjs/Observable";

export class Hero {
  constructor(
    public title: string = '',
    public id: number = Date.now()
  ) {}
}

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent {
  model: Hero = new Hero();
  heroes: Array<Hero> = [];

  constructor() {
  }

  addHero() {
    this.heroes.push(this.model);
    this.model = new Hero();
  }
}
