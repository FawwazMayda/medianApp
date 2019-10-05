import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent : String;
  enteredTitle : String;
  @Output() postCreated = new EventEmitter()

  post : any;
  constructor() { }

  ngOnInit() {
    this.post={title:"BB", content:"NNN"}
  }

  addPost(){
    this.post={title:this.enteredTitle, content:this.enteredContent}
    this.postCreated.emit(this.post)
  }

}
