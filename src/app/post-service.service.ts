import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Post } from './post.models'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts : Post[] = [];
  private postUpdated = new Subject<Post>()


  constructor() { }

  getObservables(){
    return this.postUpdated.asObservable()
  }
  addPost(post : Post){
    this.postUpdated.next(post)
  }
}
