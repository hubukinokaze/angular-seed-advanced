// app
import { Component } from '@angular/core';
import { trigger,style,transition,animate,state } from '@angular/animations';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/AuthService';

//lib
import { DataService } from '../../services/data/data.services';
import { CookieService } from 'ngx-cookie';

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
  public status: any;

  constructor(public dialog: MdDialog, private auth: AuthService, public router: Router, private data: DataService, private cookie: CookieService) {
    this.links = [
      {link: '', name: 'HOME'},
      {link: 'novel', name: 'NOVEL'},
      {link: 'art', name: 'ART'},
      {link: 'manga', name: 'MANGA'},
      {link: 'about', name: 'ABOUT'}
    ];
    this.navSelect = [1, 1, 1, 1, 1, 1];
  }

  ngOnInit() {
    if (this.cookie.get('status') !== null && this.cookie.get('status') !== '' && this.cookie.get('status') !== undefined) {
      this.data.setStatus(this.cookie.get('status').replace(/^"(.+(?="$))"$/, '$1'));
    }
  }

  public switcher(i): void {
    this.navSelect[i] = (this.navSelect[i] === 1 ? -1 : 1);
  }

  public openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '60%'
    });
    // dialogRef.afterClosed().subscribe(result => {
    // });
  }

  public logout(): void {
    this.data.setStatus('guest');
    this.router.navigateByUrl('');
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
  public email: string;
  public pw: string;
  public emailFormControl: any;
  public pwFormControl: any;
  public status: string;

  constructor(public dialogRef: MdDialogRef<LoginComponent>, public router: Router, private auth: AuthService, private data: DataService, private cookie: CookieService) {
    this.hide = true;
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // six characters or more
    // and
    // at least one lowercase and one uppercase alphabetical character
    // or
    // at least one lowercase and one numeric character
    // or
    // at least one uppercase and one numeric character
    const PW_REGEX = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    this.emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
    this.pwFormControl = new FormControl('', [Validators.required, Validators.pattern(PW_REGEX)]);
  }

  public getErrorMessage(): string {
    return this.emailFormControl.hasError('required') ? '0' :
      this.emailFormControl.hasError('pattern') ? '0' :
        this.pwFormControl.hasError('required') ? '0' :
          this.pwFormControl.hasError('pattern') ? '0' :
            '1';
  }

  public authenticate(): void {
    if (this.getErrorMessage() === '1') {
      this.loginBtn();
    }
  }

  public loginBtn(): void {
    (this.email === 'admin@gmail.com') ? this.data.setStatus('admin') : this.data.setStatus('member');

    // Cookie will expire in 1 hour
    var date = new Date();
    date.setHours(date.getHours() + 1);

    this.cookie.putObject('status', this.data.getStatus(), {
      expires: date, domain: document.location.host, path: document.location.pathname, secure: false, httpOnly: false, storeUnencoded: true
    });
    this.cookie.putObject('token', this.pw, {
      expires: date, domain: document.location.host, path: document.location.pathname, secure: false, httpOnly: false, storeUnencoded: true
    });

    this.dialogRef.close();
    this.router.navigateByUrl(`profile/${this.email}`);
  }

}
