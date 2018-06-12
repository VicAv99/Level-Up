// ordered by importance
// Modules
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from "@levelUp/app-material.module";

// ordered alphabetically
// Services
import { PostsService } from './shared/posts.service';

// Components
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './shared/comments.service';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppMaterialModule
  ],
  declarations: [AppComponent, HomeComponent, PostsComponent, PostDetailComponent, PostListComponent, CommentsComponent],
  bootstrap: [AppComponent],
  providers: [PostsService, CommentsService]
})
export class AppModule {}
