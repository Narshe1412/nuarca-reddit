import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { faAngleUp, faAngleDown, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  upvoted: boolean;
  downvoted: boolean;
  public visible: boolean;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faEyeSlash = faEyeSlash;

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
    this.upvoted = false;
    this.downvoted = false;
    this.visible = true;
  }

  upvote(): void {
    if (this.downvoted) {
      // If already downvoted, switch flags, add +2 to votes (so delta is +1)
      this.post.score += 2;
      this.upvoted = true;
      this.downvoted = false;
    } else if (!this.upvoted) {
      // If not downvoted, add +1 vote, set flag
      this.post.score++;
      this.upvoted = true;
    }
  }

  downvote(): void {
    if (this.upvoted) {
       // If already upvoted, switch flags, add -2 to votes (so delta is -1)
      this.post.score -= 2;
      this.downvoted = true;
      this.upvoted = false;
    } else if (!this.downvoted) {
      // If not upvoted, add -1 vote, set flag
      this.post.score--;
      this.downvoted = true;
    }
  }

  toggleVisible(): void {
    this.visible = !this.visible;
  }
}
