//lib
import { Component } from '@angular/core';

//app
import { DataService } from '../../modules/shared/services/data/data.services';

@Component ({
  moduleId: module.id,
  selector: 'sd-new-art',
  templateUrl: 'new_art.component.html',
  styleUrls: ['new_art.component.css']
})

export class NewArtComponent {
  public email: any;
  public avatar: any;
  public status: any;
  public title: any;
  public story: any;
  public artType: any;

  constructor() {
    this.artType = [
      'Novel',
      'Art',
      'Manga'
    ];
  }
}
