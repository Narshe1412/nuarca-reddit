# Nuarca Reddit

This project was created as part of the interview process at Nuarca

It consists in a **clever** Reddit front end to increase your productivity at work. It's made to look like the Google search engine, so no one would ask questions if you should be on reddit right now.

The frontend defaults to the angular2 subreddit (per customer requirement) but allows you to type other subreddits in the search field and extract the contents of other subreddits.

It has the frontend functionality to upvote and downvote, but it's not yet connected to the reddit backend to make it completely functional.

The option to hide posts is not persisten and would reset on page reload.

To test use `ng serve` or `npm start` on the development folder (make sure to use `npm install` first to load all dependencies) or use the content on the `dist` folder.

(c) Manuel Colorado 2018