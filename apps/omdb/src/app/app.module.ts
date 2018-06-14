import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HomeComponent } from './home/home.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { OmdbService } from './shared/omdb.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), AppRoutingModule],
  declarations: [AppComponent, HomeComponent, MovieSearchComponent],
  bootstrap: [AppComponent],
  providers: [OmdbService]
})
export class AppModule {}
