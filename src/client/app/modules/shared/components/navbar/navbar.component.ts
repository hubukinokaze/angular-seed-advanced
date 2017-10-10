// app
import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [
    'navbar.component.css',
  ],
  animations: [
    trigger('highlight', [
      state('1, void', style({borderColor: 'white'})),
      state('-1', style({borderColor: '#3F354D',})),
      transition(
        '1 <=> -1', [animate(220, style({})), animate(220)])
    ]),
  ]
})

export class NavbarComponent {
  public links: any[];
  public navSelect: any[];

  constructor() {
    this.links = [
      {link: '', name: 'HOME'},
      {link: 'novel', name: 'NOVEL'},
      {link: 'art', name: 'ART'},
      {link: 'manga', name: 'MANGA'},
      {link: 'about', name: 'ABOUT'}
    ];
    this.navSelect = [1, 1, 1, 1, 1];
  }

  public switcher(i) {
    this.navSelect[i] = (this.navSelect[i] === 1 ? -1 : 1);
  }
}
