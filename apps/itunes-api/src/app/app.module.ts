import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '@levelUp/app-material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { SearchService } from './shared/search.service';


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
    SearchComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [SearchService]
})
export class AppModule {}
