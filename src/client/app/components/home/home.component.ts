// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../modules/core/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  public novelList: any;
  public artList: any;
  public mangaList: any;
  public newsList: any;
  public tabSelectedIndex: number;

  constructor(public routerext: RouterExtensions) {
    this.tabSelectedIndex = 0;
  }

  ngOnInit() {
    this.novelList = [
      {
        icon: 'collections',
        title: 'Title',
        author: 'Author',
        description: 'Description',
        date: 'Date',
        cover: 'Cover Image',
        type: 'novel'
      },
      {
        icon: 'book',
        title: 'Chapter 284: The Grand Battle between Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 4, 2017',
        cover: 'Cover Image',
        type: 'novel'
      },
      {
        icon: 'book',
        title: 'Chapter 283: The Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 3, 2017',
        cover: 'Cover Image',
        type: 'novel'
      },
      {
        icon: 'book',
        title: 'Chapter 282: Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 2, 2017',
        cover: 'Cover Image',
        type: 'novel'
      }
    ];

    this.artList = [
      {
        icon: 'collections',
        title: 'Title',
        author: 'Author',
        description: 'Description',
        date: 'Date',
        cover: 'Cover Image',
        type: 'art'
      },
      {
        icon: 'color_lens',
        title: 'The Grand Battle between Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 4, 2017',
        cover: 'Cover Image',
        type: 'art'
      },
      {
        icon: 'color_lens',
        title: 'The Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 3, 2017',
        cover: 'Cover Image',
        type: 'art'
      },
      {
        icon: 'color_lens',
        title: 'Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 2, 2017',
        cover: 'Cover Image',
        type: 'art'
      }
    ];

    this.mangaList = [
      {
        icon: 'collections',
        title: 'Title',
        author: 'Author',
        description: 'Description',
        date: 'Date',
        cover: 'Cover Image',
        type: 'manga'
      },
      {
        icon: 'dashboard',
        title: 'Chapter 284: The Grand Battle between Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 4, 2017',
        cover: 'Cover Image',
        type: 'manga'
      },
      {
        icon: 'dashboard',
        title: 'Chapter 283: The Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 3, 2017',
        cover: 'Cover Image',
        type: 'manga'
      },
      {
        icon: 'dashboard',
        title: 'Chapter 282: Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 2, 2017',
        cover: 'Cover Image',
        type: 'manga'
      }
    ];

    this.newsList = [
      {
        title: 'The Grand Battle between Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 4, 2017',
        type: 'news'
      },
      {
        title: 'The Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 3, 2017',
        type: 'news'
      },
      {
        title: 'Monsters',
        author: 'Reigokai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
        date: 'Oct. 2, 2017',
        type: 'news'
      }
    ];
  }
  
}
