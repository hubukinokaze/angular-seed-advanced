//lib
import { Component } from '@angular/core';

//app
import { AuthService } from '../../services/AuthService';
import { DropboxService } from '../../services/DropboxService';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-art',
  templateUrl: 'art.component.html',
  styleUrls: [
    'art.component.css',
  ],
})
export class ArtComponent {
  public artList: any;

  constructor(private dropbox: DropboxService, private cookie: CookieService, private router: Router) {
    this.artList = [];
  }

  public getArt() {
    // if (this.cookie.get('token') !== null)
    this.getArtworkFromDropbox('/Hikineetos-Shared-Artwork');
  }


  private getArtworkFromDropbox(link) {
    this.dropbox.getAllArtFromDropbox(link).subscribe((data) => {
      for (var id in data) {
        let file = data[id];
          if (file['.tag'] !== 'folder') {
            this.getSingleArtFromDropbox(file.path_display);
          } else {
            this.getArtworkFromDropbox(file.path_display);
          }
      }
    });
  }

  private getSingleArtFromDropbox(link) {
    this.dropbox.getArtworkFromDropbox(link).subscribe( (data) => {
      this.artList.push(data);
    });
  }
}
