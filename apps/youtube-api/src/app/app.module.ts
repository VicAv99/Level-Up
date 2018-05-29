import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppMaterialModule } from "@levelUp/app-material.module";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './shared/playlist.service';
import { PlaylistListComponent } from './playlist/playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from './playlist/playlist-detail/playlist-detail.component';
import { PlaylistVideoComponent } from './playlist/playlist-video/playlist-video.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  declarations: [AppComponent, HomeComponent, PlaylistComponent, PlaylistListComponent, PlaylistDetailComponent, PlaylistVideoComponent],
  bootstrap: [AppComponent],
  providers: [PlaylistService]
})
export class AppModule {}
