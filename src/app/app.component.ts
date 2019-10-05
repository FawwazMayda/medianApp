import { Component } from '@angular/core';
import { Post } from './post.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medianApp';
  storedPosts : Post[] = []

  onPostAdded(post){
    this.storedPosts.push(post)
  }
}
