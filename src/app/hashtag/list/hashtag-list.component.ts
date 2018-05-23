import { Component, OnInit, Input } from '@angular/core';
import { Hashtag } from '../../core/models';

@Component({
  selector: 'app-hashtag-list',
  templateUrl: './hashtag-list.component.html',
  styleUrls: ['./hashtag-list.component.scss']
})
export class HashtagListComponent implements OnInit {
  /** List Hastag inital from API */
  @Input() items: Hashtag[];

  currentPage: Number = 1;

  get totalPage() {
    return Math.ceil(this.items.length / 10);
  }

  constructor() { }

  ngOnInit() {
  }

}
