//lib
import { Component } from '@angular/core';

//app
import { DataService } from '../../modules/shared/services/data/data.services';

@Component({
  moduleId: module.id,
  selector: 'sd-manga',
  templateUrl: 'manga.component.html',
  styleUrls: [
    'manga.component.css',
  ],
})
export class MangaComponent {
  private status: any;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status);
  }
}
