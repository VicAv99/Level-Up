import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '@levelUp/app-material.module';

import { ComicsService } from './shared/comics.service';

import { AppComponent } from './app.component';
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
    ComicsComponent,
    CurrentComicComponent,
    HomeComponent,
    RandomComicComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ComicsService]
})
export class AppModule {}
