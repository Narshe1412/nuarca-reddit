import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post: Post =  {
    id: 1,
    title: 'Reddit roxx',
    subreddit: 'r/angular',
    image: '',
    creationDate: '25-05-1982'
  }

  constructor() { }

  ngOnInit() {
  }

}
