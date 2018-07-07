// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '@levelUp/app-material.module';
// Services
import { SpotifyService } from './shared/spotify.service';
//Components
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    LoginComponent,
    SearchComponent,
  ],
  bootstrap: [AppComponent],
  providers: [SpotifyService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class AppModule {}
