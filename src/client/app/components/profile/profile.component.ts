//lib
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//app
import { DataService } from '../../modules/shared/services/data/data.services';

@Component ({
  moduleId: module.id,
  selector: 'sd-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})

export class ProfileComponent {
  public email: any;
  public avatar: any;
  public status: any;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.email = 'nothing';
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status);
    this.route.params.subscribe((params) => this.email = params.email);
  }

  public logOut() {
    this.data.changeStatus('guest');
  }

}
