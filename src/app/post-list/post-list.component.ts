import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    {title:"This is the first post", content:"Hello I'm first post"},
    {title:"This is the second post", content:"Hello I'm second post"},
    {title:"This is the third post", content:"Hello I'm third post"}]
  constructor() { }

  ngOnInit() {
  }

}
