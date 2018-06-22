import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Comic } from '../../shared/models/comic';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-random-comic',
  templateUrl: './random-comic.component.html',
  styleUrls: ['./random-comic.component.css']
})
export class RandomComicComponent implements OnInit {
  random: Comic;
  form: FormGroup;
  @Input() set randomComic(value: Comic) {
    this.random = Object.assign({}, value);
  }
  @Output() randomId = new EventEmitter();
  @Output() searchNum = new EventEmitter();

  constructor (private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      numberSrch: new FormControl('', Validators.maxLength(5))
    })
  }

  createId() {
    const id = Math.floor((Math.random() * 100) + 1);
    this.randomId.emit(id);
    this.form.reset();
  }
}
