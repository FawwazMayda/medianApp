import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredPost : String;
  post : String = "";
  constructor() { }

  ngOnInit() {
  }

  addPost(){
    this.post=this.enteredPost;
  }

}
