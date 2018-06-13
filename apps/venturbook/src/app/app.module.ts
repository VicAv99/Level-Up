// ordered by importance
// Modules
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from "@levelUp/app-material.module";

// ordered alphabetically
// Services
import { CommentsService } from './shared/comments.service';
import { PostsService } from './shared/posts.service';

// Components
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostCommentsComponent } from './posts/post-comments/post-comments.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';

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
    PostsComponent,
    PostCommentsComponent,
    PostDetailComponent,
    PostListComponent
  ],
  bootstrap: [AppComponent],
  providers: [CommentsService ,PostsService]
})
export class AppModule {}
