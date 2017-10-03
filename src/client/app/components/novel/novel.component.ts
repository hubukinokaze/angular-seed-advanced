// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../modules/core/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'novel.component.html',
  styleUrls: ['novel.component.css']
})
export class NovelComponent implements OnInit {
  public names$: Observable<any>;
  public newName: string;

  constructor(public routerext: RouterExtensions) {}

  ngOnInit() {
    this.newName = '';
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.newName = '';
    return false;
  }
}
