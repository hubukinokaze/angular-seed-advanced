//lib
import { Component } from '@angular/core';

//app
import { DataService } from '../../modules/shared/services/data/data.services';

@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: [
    'about.component.css',
  ],
})
export class AboutComponent {
  private status: any;

  constructor(private data: DataService) {
    // This is here as an example
    // if (this.page) {
    //   this.page.actionBarHidden = true;
    // }
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status);
  }
}
