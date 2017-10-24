import {Component} from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})

export class ProfileComponent {
  public username: any;
  public avatar: any;
  public status: any;

  constructor() {  }

}
