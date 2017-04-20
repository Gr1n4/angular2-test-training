import {Component, Input, Output, EventEmitter} from '@angular/core';

interface IHero {
  id: number,
  title: string,
}

@Component({
  selector: 'hero-item',
  template: require('./hero-item.component.pug')(),
  styles: [require('./hero-item.component.sass')]
})
export class HeroItemComponent {
  @Input() hero: IHero;
}
