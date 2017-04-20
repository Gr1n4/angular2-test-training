import { Component } from '@angular/core';

// import {Observable} from "rxjs/Observable";

export class Hero {
  constructor(
    private title: string = '',
    private id: number = Date.now()
  ) {}
}

@Component({
  selector: 'hero',
  template: require('./hero.component.pug')(),
  styles: [require('./hero.component.sass')]
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
