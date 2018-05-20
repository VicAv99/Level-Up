import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppMaterialModule } from '@levelUp/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { CategoriesService } from './shared/categories.service';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HttpClientModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, CategoriesComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [CategoriesService]
})
export class AppModule {}
