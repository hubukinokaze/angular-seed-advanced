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
  public amendments;

  constructor(private data: DataService) {
    // This is here as an example
    // if (this.page) {
    //   this.page.actionBarHidden = true;
    // }
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status);
    this.amendments = [
      {
        count: 'I',
        title: 'Community',
        description: 'We value having a familial community, where we treat others fairly and communicate well with each other.'
      },
      {
        count: 'II',
        title: 'Censorship',
        description: 'Harem, yaoi, shounen ai, yuri, shoujo ai, porn/hentai, fan service, or anything related will not be allowed. As for gore and extremely graphic content, blood is okay in moderation.'
      },
      {
        count: 'III',
        title: 'Critique',
        description: 'Constructive criticism is ok, but try to be nice.'
      },
      {
        count: 'IV',
        title: 'Cooperation',
        description: 'If possible don\'t just add content, but give feedback to each other. We want as much as possible an environment of give and take.'
      },
      {
        count: 'V',
        title: 'Cultivate',
        description: 'We want to create an atmosphere where people can also teach other so each artist can improve their artistic skills.'
      },
      {
        count: 'VI',
        title: 'Creativity',
        description: 'We encourage exploration of new ideas and imaginative experimentation. Meaning plagiarism and claiming other’s ideas as one’s own is not tolerated.'
      }
    ];

  }
}
