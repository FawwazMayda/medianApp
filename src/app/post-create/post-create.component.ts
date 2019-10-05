import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.models';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent : string;
  enteredTitle : string;
  @Output() postCreated = new EventEmitter()

  post : Post;
  constructor() { }

  ngOnInit() {
  }

  addPost(){
    this.post={title:this.enteredTitle, content:this.enteredContent}
    this.postCreated.emit(this.post)
  }

}
