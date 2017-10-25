//lib
import { Injector, Component } from '@angular/core';
import { Config } from '../../modules/core/index';

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

  constructor(private injector: Injector, private data: DataService) {
    // This is here as an example
    // if (this.page) {
    //   this.page.actionBarHidden = true;
    // }
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status);
  }
}
