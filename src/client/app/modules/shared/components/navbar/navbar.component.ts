// app
import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { trigger,style,transition,animate,state } from '@angular/animations';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//lib
import { DataService } from '../../services/data/data.services';

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

  constructor(public dialog: MdDialog) {
    this.links = [
      {link: '', name: 'HOME'},
      {link: 'novel', name: 'NOVEL'},
      {link: 'art', name: 'ART'},
      {link: 'manga', name: 'MANGA'},
      {link: 'about', name: 'ABOUT'}
    ];
    this.navSelect = [1, 1, 1, 1, 1, 1];
  }

  public switcher(i) {
    this.navSelect[i] = (this.navSelect[i] === 1 ? -1 : 1);
  }

  public openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '60%'
    });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
}

@Component({
  moduleId: module.id,
  selector: 'login-overview',
  templateUrl: '../login/login.component.html',
  styleUrls: [
    '../login/login.component.css',
  ]
})
export class LoginComponent {
  public hide: any;
  public email: any;
  public emailFormControl: any;

  constructor(
    public dialogRef: MdDialogRef<LoginComponent>, public router: Router, private data: DataService) {
    this.hide = true;
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  }

  public getErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'You must enter a value' :
      this.emailFormControl.hasError('pattern') ? 'Not a valid email' :
        '1';
  }

  public authenticate() {
    if (this.getErrorMessage() === '1') {
      this.loginBtn();
    }
  }

  public loginBtn() {
    if (this.email === 'admin@gmail.com') {
      this.data.changeStatus('admin');
    } else {
      this.data.changeStatus('member');
    }
    this.dialogRef.close();
    this.router.navigate(['profile', this.email]);

  }

}
