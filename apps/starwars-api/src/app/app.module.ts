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
import { StarshipsService } from './shared/starships.service';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [StarshipsService]
})
export class AppModule {}
