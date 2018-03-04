import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private dropboxApi: any;

  public constructor(private http: Http) {
    this.dropboxApi = '';
  }


}


