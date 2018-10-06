import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  private redditUrl = 'https://www.reddit.com/r/angular2.json';  // URL to web api

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.redditUrl).pipe(
      map((response: any) => {
        const postArray = response.data.children;
        console.log(postArray);
        return postArray;
      })
    )
  }

}
