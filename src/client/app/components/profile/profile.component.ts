import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.email = params.email);
  }

}
