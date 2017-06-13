import {Component, Input, Output, EventEmitter} from '@angular/core';

interface IHero {
  id: number,
  title: string,
}

@Component({
  selector: 'hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.sass']
})
export class HeroItemComponent {
  @Input() hero: IHero;
}
