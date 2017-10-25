//lib
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//app
import { RouterExtensions, Config } from '../../modules/core/index';
import { DataService } from '../../modules/shared/services/data/data.services';

@Component ({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})

export class ProfileComponent {
  public email: any;
  public avatar: any;
  public status: any;

  constructor(public routerext: RouterExtensions, private route: ActivatedRoute, private data: DataService) {  }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status);
    this.route.params.subscribe((params) => this.email = params.email);
  }

  public logOut() {
    this.data.changeStatus('guest');
  }

}
