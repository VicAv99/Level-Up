import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '@levelUp/app-material.module';

import { ComicsService } from './shared/comics.service';

import { CurrentComicComponent } from './comics/current-comic/current-comic.component';
import { ComicsComponent } from './comics/comics.component';
import { HomeComponent } from './home/home.component';
import { RandomComicComponent } from './comics/random-comic/random-comic.component';

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
    ComicsComponent,
    RandomComicComponent,
    CurrentComicComponent
  ],
  bootstrap: [AppComponent],
  providers: [ComicsService]
})
export class AppModule {}
