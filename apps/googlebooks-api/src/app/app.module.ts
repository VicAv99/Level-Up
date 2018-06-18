import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { BooksService } from './shared/books.service';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { BooksSearchComponent } from './books/books-search/books-search.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '@levelUp/app-material.module';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    BooksListComponent,
    BooksSearchComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BooksService]
})
export class AppModule {}
