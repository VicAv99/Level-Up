import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { PostsService } from './shared/posts.service';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HttpClientModule
  ],
  declarations: [AppComponent, PostsComponent, PostListComponent, PostDetailComponent],
  bootstrap: [AppComponent],
  providers: [PostsService]
})
export class AppModule {}
