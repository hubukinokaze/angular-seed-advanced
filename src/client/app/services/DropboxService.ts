import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class DropboxService {
  private dropboxApi: any;
  private bearer: string;

  public constructor(private http: Http, private cookie: CookieService) {
    this.dropboxApi = 'https://api.dropboxapi.com/2/files';
    this.bearer = `Bearer  ${this.cookie.get('token')}`;
    console.log(this.bearer);
  }

  public getArtworkFromDropbox(artwork) {
    var getSingleArt = `${this.dropboxApi}/get_temporary_link`;
    // create headers
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.bearer);

    let body = {
      path: artwork
    };

    let options = new RequestOptions({headers: headers});

    // make api call
    return this.http.post(getSingleArt, body, options).map(
      response => {
        return response.json();
      }
    );
  }

  public getAllArtworkFromDropbox(link) {
    var getArtFolder = `${this.dropboxApi}/list_folder`;
    // create headers
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.bearer);

    let body = {
      path: link,
      recursive: false
    };

    let options = new RequestOptions({headers: headers});

    // make api call
    return this.http.post(getArtFolder, body, options).map(
      response => {
        return response.json();
      }
    );
  }

  public getArtFromDropbox(art) {
    var getSingleArt = `${this.dropboxApi}/get_temporary_link`;
    // create headers
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.bearer);

    let body = {
      path: art
    };

    let options = new RequestOptions({headers: headers});

    // make api call
    return this.http.post(getSingleArt, body, options).map(
      response => {
        return response.json();
      }
    );
  }

  public getAllArtFromDropbox(link) {
    let artList = {};
    var getArtFolder = `${this.dropboxApi}/list_folder`;
    // create headers
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.bearer);

    let body = {
      path: link,
      recursive: false
    };

    let options = new RequestOptions({headers: headers});

    // make api call
    return this.http.post(getArtFolder, body, options).map(
      response => {
        let files = response.json().entries;
        for (let i = 0; i < files.length; i++) {
          if (files[i].name.indexOf('.doc') === -1 || files[i]['.tag'] === 'folder') {
            artList[i] = (files[i]);
          }
        }
        return artList;
      }
    );
  }

}
