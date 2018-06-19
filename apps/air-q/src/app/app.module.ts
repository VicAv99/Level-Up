import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from '@levelUp/app-material.module';

import { QualityService } from './shared/quality.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { LosAngelesComponent } from './locations/los-angeles/los-angeles.component';
import { PhoenixComponent } from './locations/phoenix/phoenix.component';
import { SearchComponent } from './locations/search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LocationsComponent,
    LosAngelesComponent,
    PhoenixComponent,
    SearchComponent
  ],
  bootstrap: [AppComponent],
  providers: [QualityService]
})
export class AppModule {}
