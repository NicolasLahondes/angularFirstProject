import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTableLineComponent } from './components/books-table-line/books-table-line.component';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { BookService } from './services/books/book.service';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { SingleBookViewComponent } from './views/single-book-view/single-book-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooksViewComponent,
    BooksTableComponent,
    BookTableLineComponent,
    AuthViewComponent,
    HeaderComponent,
    SingleBookViewComponent,
    ErrorViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BookService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
