import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '@levelUp/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SpeciesService } from './shared/species.service';
import { SpeciesComponent } from './species/species.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { SpeciesDetailComponent } from './species/species-detail/species-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [AppComponent, HomeComponent, SpeciesComponent, SpeciesListComponent, SpeciesDetailComponent],
  bootstrap: [AppComponent],
  providers: [SpeciesService]
})
export class AppModule {}
