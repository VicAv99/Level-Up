import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from '@levelUp/app-material.module';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonService } from './shared/pokemon.service';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  declarations: [AppComponent, HomeComponent, PokemonComponent, PokemonListComponent, PokemonDetailComponent],
  bootstrap: [AppComponent],
  providers: [PokemonService]
})
export class AppModule {}
