import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AppMaterialModule } from '@levelUp/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TweetsComponent } from './tweets/tweets.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppMaterialModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, HomeComponent, TweetsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
