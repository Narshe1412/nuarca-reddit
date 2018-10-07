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
