import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '@levelUp/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { SpeciesComponent } from './species/species.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppMaterialModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, SpeciesComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
