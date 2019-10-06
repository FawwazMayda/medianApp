import { Injectable } from '@angular/core';
import { Post } from './post.models'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts : Post[] = [];

  constructor() { }

  addPost(post : Post){
    this.posts.push(post)
  }
}
