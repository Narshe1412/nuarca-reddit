import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Post } from './post';
import { query } from '@angular/core/src/render3/query';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  private redditUrl = 'https://www.reddit.com/r/angular2.json';  // URL to web api

  constructor(private http: HttpClient) { }

  getPosts(url: string = this.redditUrl): Observable<Post[]> {
    let queryUrl = `https://www.reddit.com/r/${url}.json`;
    return this.http.get<Post[]>(queryUrl)
      .pipe(
        map((response: any) => {
          return response.data.children.map(item => {
            return {
              id: item.data.id,
              title: item.data.title,
              subreddit: item.data.subreddit_name_prefixed,
              image: item.data.thumbnail,
              creationDate: item.data.created_utc,
              score: item.data.score,
              text: item.data.selftext,
              link: item.data.permalink
            };
          })
        })
      )
  }
}
