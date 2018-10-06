import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }
}
