//lib
import { Component } from '@angular/core';

//app
import { AuthService } from '../../services/AuthService';
import { DropboxService } from '../../services/DropboxService';
import { CookieService } from 'ngx-cookie';

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
  private status: any;

  constructor(private dropbox: DropboxService, private cookie: CookieService) {
    this.artList = [];
  }

  ngOnInit() {
    if (!this.cookie.get('token'))
      this.getArtworkFromDropbox('/Hikineetos-Shared-Artwork');
  }


  private getArtworkFromDropbox(link) {
    this.dropbox.getAllArtFromDropbox(link).subscribe(data => {
      console.log(data);
      // for (let i = 0; i < data.entries.length; i++) {
      //   let file = data.entries[i];
      //   if (file['.tag'] !== 'folder') {
      //     console.log(file);
      //     this.getSingleArtFromDropbox(file.path_display);
      //   } else {
      //     this.getArtworkFromDropbox(file.path_display);
      //   }
      // }
    });
  }

  private getSingleArtFromDropbox(link) {
    this.dropbox.getArtworkFromDropbox(link).subscribe( data => {
      this.artList.push(data);
    });
  }
}
