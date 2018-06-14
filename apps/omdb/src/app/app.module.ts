import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '@levelUp/app-material.module';

import { OmdbService } from './shared/omdb.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppMaterialModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  bootstrap: [AppComponent],
  providers: [OmdbService]
})
export class AppModule {}
