import { Component, OnInit } from '@angular/core';
import { Post } from '../post.models';
import { PostServiceService } from '../post-service.service'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent : string;
  enteredTitle : string;

  post : Post;
  constructor(private postService : PostServiceService) { }

  ngOnInit() {
  }

  addPost(){
    this.post={title:this.enteredTitle, content:this.enteredContent}
    this.postService.addPost(this.post)
  }

}
