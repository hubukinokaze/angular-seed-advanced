//lib
import { Component } from '@angular/core';

//app
import { DataService } from '../../modules/shared/services/data/data.services';

@Component({
  moduleId: module.id,
  selector: 'sd-art',
  templateUrl: 'art.component.html',
  styleUrls: [
    'art.component.css',
  ],
})
export class ArtComponent {
  private status: any;

  constructor(private data: DataService) {

  }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status);
  }
}
