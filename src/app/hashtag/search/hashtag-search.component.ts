import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MnRouteData } from '@mn-core/models';

@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit {
  /** Search condition */
  @Input() search: any = { filter: '' };
  /** Page RoutesData */
  @Input() pageRoutesData: MnRouteData = {};
  /** Start search */
  @Output() searchStart: EventEmitter<any> = new EventEmitter<any>();

  /** Search Form */
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    // Create FormGroup of search condition
    this.form = this.fb.group(Object.assign({}, this.search));
    // Filter control
    const filterCtr = this.form.get('filter');
    if (filterCtr) {
      filterCtr.valueChanges.subscribe(filter => {
        this.searchStart.emit(Object.assign({}, this.form.value, { filter }));
      });
    }
  }
}
