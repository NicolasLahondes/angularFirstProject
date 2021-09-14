import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css'],
})
export class BooksTableComponent implements OnInit {
  @Input() books: Array<Book>;

  constructor() {}
  isEven(index: any) {
    if (index % 2 === 0) {
      return { background: 'mintcream', color: 'black' };
    } else {
      return { background: 'GoldenRod', color: 'white'  };
    }
  }
  ngOnInit(): void {}
}
