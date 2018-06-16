import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { FootballService } from './shared/football.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '@levelUp/app-material.module';
import { CompetitionsComponent } from './competitions/competitions.component';
import { TeamsComponent } from './teams/teams.component';

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
    HomeComponent,
    CompetitionsComponent,
    TeamsComponent
  ],
  bootstrap: [AppComponent],
  providers: [FootballService]
})
export class AppModule {}
