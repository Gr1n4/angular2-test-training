import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Hero} from '../hero.component';

@Component({
  selector: 'hero-list',
  template: require('./hero-list.component.pug')(),
  styles: [require('./hero-list.component.sass')]
})
export class HeroListComponent {
  @Input() heroes: Array<Hero>;
}
