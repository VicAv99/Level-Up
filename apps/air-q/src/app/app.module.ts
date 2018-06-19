import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { PhoenixComponent } from './locations/phoenix/phoenix.component';
import { LosAngelesComponent } from './locations/los-angeles/los-angeles.component';
import { SearchComponent } from './locations/search/search.component';
import { QualityService } from './shared/quality.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), AppRoutingModule],
  declarations: [AppComponent, HomeComponent, LocationsComponent, PhoenixComponent, LosAngelesComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [QualityService]
})
export class AppModule {}
