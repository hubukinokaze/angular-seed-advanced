// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

// app
import { DataService } from '../../modules/shared/services/data/data.services';

@Component({
  moduleId: module.id,
  selector: 'sd-novel',
  templateUrl: 'novel.component.html',
  styleUrls: ['novel.component.css']
})
export class NovelComponent implements OnInit {
  public newName: string;
  private status: any;

  constructor(private data: DataService) {}

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
