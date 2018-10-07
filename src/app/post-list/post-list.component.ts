import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { RedditService } from '../reddit.service';
import { faSearch, faSync } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  faSearch = faSearch;
  faSync = faSync;
  subredditQuery: string;
  previousQuery: string;

  posts: Post[];

  constructor(private redditService: RedditService) { }

  getPosts(subreddit: string = "angular2"): void {
    this.redditService.getPosts(subreddit).subscribe(posts => this.posts = posts);
  }

  ngOnInit() {
    this.previousQuery = "angular2"; //default query
    this.getPosts();
  }

  refreshPage() {
    this.posts = [];
    this.getPosts(this.previousQuery);
  }

  submitQuery() {
    this.posts = [];
    this.previousQuery = this.subredditQuery;
    this.getPosts(this.subredditQuery);
  }

}
