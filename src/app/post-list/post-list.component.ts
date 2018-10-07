import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private redditService: RedditService) { }

  getPosts(): void {
    this.redditService.getPosts().subscribe(posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

  refreshPage() {
    this.posts = [];
    this.getPosts();
  }


}
