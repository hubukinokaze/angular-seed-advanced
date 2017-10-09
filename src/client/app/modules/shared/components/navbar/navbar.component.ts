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
      state('1, void', style({borderBottom: 'none'})),
      state('-1', style({borderBottom: 'thick solid #3F354D'})),
      transition(
        'collapsed <=> expanded', [animate(500, style({height: '250px'})), animate(500)])
    ]),
  ]
})
export class NavbarComponent {
  public navSelect: any[];
  constructor(){this.navSelect = [1, 1, 1, 1, 1];}
}
