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
  public names$: Observable<any>;
  public novelList: any;
  public artList: any;
  public mangaList: any;

  constructor(public routerext: RouterExtensions) {}

  ngOnInit() {
    this.novelList = [
      {
        icon: 'collections',
        title: 'Title',
        author: 'Author',
        description: 'Description',
        date: 'Date',
        cover: 'Cover Image'
      },
      {
        icon: 'book',
        title: 'Chapter 284: The Grand Battle between Monsters',
        author: 'Reigokai',
        description: 'Had to at least finish the fight, so here it is. ' +
        'One of the clear weak points of the body, the head. ' +
        'Moreover, he was pierced right in between his brows, and yet, ' +
        'he counterattacked in a matter of seconds. ' +
        'This is already an enemy that I can’t consider a human as I...',
        date: 'Oct. 4, 2017',
        cover: 'Cover Image'
      },
      {
        icon: 'book',
        title: 'Chapter 283: The Monsters',
        author: 'Reigokai',
        description: 'Had to at least finish the fight, so here it is. ' +
        'One of the clear weak points of the body, the head. ' +
        'Moreover, he was pierced right...',
        date: 'Oct. 3, 2017',
        cover: 'Cover Image'
      },
      {
        icon: 'book',
        title: 'Chapter 282: Monsters',
        author: 'Reigokai',
        description: 'Description',
        date: 'Oct. 2, 2017',
        cover: 'Cover Image'
      }
    ];

    this.artList = [
      {
        icon: 'collections',
        title: 'Title',
        author: 'Author',
        description: 'Description',
        date: 'Date',
        cover: 'Cover Image'
      },
      {
        icon: 'color_lens',
        title: 'The Grand Battle between Monsters',
        author: 'Reigokai',
        description: 'Description',
        date: 'Oct. 4, 2017',
        cover: 'Cover Image'
      },
      {
        icon: 'color_lens',
        title: 'The Monsters',
        author: 'Reigokai',
        description: 'Description',
        date: 'Oct. 3, 2017',
        cover: 'Cover Image'
      },
      {
        icon: 'color_lens',
        title: 'Monsters',
        author: 'Reigokai',
        description: 'Had to at least finish the fight, so here it is. ' +
        'One of the clear weak points of the body, the head. ' +
        'Moreover, he was pierced right in between his brows, and yet... ',
        date: 'Oct. 2, 2017',
        cover: 'Cover Image'
      }
    ];

    this.mangaList = [
      {
        icon: 'collections',
        title: 'Title',
        author: 'Author',
        description: 'Description',
        date: 'Date',
        cover: 'Cover Image'
      },
      {
        icon: 'dashboard',
        title: 'Chapter 284: The Grand Battle between Monsters',
        author: 'Reigokai',
        description: 'Description',
        date: 'Oct. 4, 2017',
        cover: 'Cover Image'
      },
      {
        icon: 'dashboard',
        title: 'Chapter 283: The Monsters',
        author: 'Reigokai',
        description: 'Description',
        date: 'Oct. 3, 2017',
        cover: 'Cover Image'
      },
      {
        icon: 'dashboard',
        title: 'Chapter 282: Monsters',
        author: 'Reigokai',
        description: 'Had to at least finish the fight, so here it is. ' +
        'One of the clear weak points of the body, the head. ' +
        'Moreover, he was pierced right in between his brows, and yet, ' +
        'he counterattacked in a matter... ',
        date: 'Oct. 2, 2017',
        cover: 'Cover Image'
      }
    ];
  }


  // readAbout() {
  //   // Try this in the {N} app
  //   // {N} can use these animation options
  //   this.routerext.navigate(['/about'], {
  //     transition: {
  //       duration: 1000,
  //       name: 'slideTop',
  //     }
  //   });
  // }
}
