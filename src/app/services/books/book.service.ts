import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // Subject => On peut observer ses changements mais il n'y a pas de cache
  // BehaviourSubject => Subject + cache de la dernière valeur envoyée. (Valeur complète, genre un tableau)
  // Replay Subject => Behaviour + on peut gérer plusieurs cache. Des caches n-1 (Utilse pour Ctrl + Z)

  books: BehaviorSubject<Array<Book>>;

  constructor() {
    const booksToPush = [
      new Book("L'horreur dans le cimetière", 'Lovecraft', 'Libre'),
      new Book('The old man and the sea', 'Hemingway', 'Pris'),
      new Book('Les annales de la compagnie noire', 'Cook', 'Libre'),
      new Book('Conan', 'Howard', 'Libre'),
      new Book('The Witcher', 'Andrzej Sapkowski', 'Pris'),
      new Book('Le Seigneur des Anneaux', 'Tolkien', 'Libre'),
      new Book('???', 'Mandragore', 'Pris'),
      new Book('Divine Comédie', 'Dante Alighieri', 'Pris'),
    ];

    this.books = new BehaviorSubject<Array<Book>>(booksToPush);
  }

  // switchToAllTaken() {
  //   this.books.forEach((book) => (book.status = 'Pris'));
  // }
  // switchToAllFree() {
  //   this.books.forEach((book) => (book.status = 'Pris'));
  // }

  switchAllStatus(newStatus: string) {
    // On récupère la copie en cache
    const booksToEdit = this.books.getValue();
    // On travaille sur les données
    booksToEdit.forEach((book) => (book.status = newStatus));

    // On envoie la nouvelle valeur à tous ceux qui écoutes.
    this.books.next(booksToEdit);
  }

  switchStatus(bookId: number, newStatus: string) {
    const booksToEdit = this.books.getValue();
    for (let book of booksToEdit) {
      if (book.id === bookId) {
        book.status = newStatus;
        this.books.next(booksToEdit);
        break;
      }
    }
  }

  getBookById(bookId: number): Promise<Book> {
    return new Promise<Book>((res, rej) => {
      const books = this.books.getValue();

      for (let book of books) {
        if (book.id === bookId) {
          res(book);
          break;
        }
      }
    });
  }
}
