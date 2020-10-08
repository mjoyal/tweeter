/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  const $tweetContainer = $('#tweets-container'); 

  const createTweetElement = (data) => {
    const $tweet = $(`<article>
      <header>
        <div class="user-tweet-info">
          <img src=${data.user.avatars} alt="Profile Avatar">
          <p>${data.user.name}</p>
        </div>
        <p class="tweet-username">${data.user.handle}</p>
      </header>
      <p class="old-tweet-text">${data.content.text}</p>
      <footer>
        <p>${data.created_at}</p>
        <div>
          <span> <i class="fa fa-flag" aria-hidden="true"></i> </span>
          <span> <i class="fa fa-retweet" aria-hidden="true"></i> </span>
          <span> <i class="fa fa-heart" aria-hidden="true"></i> </span>
        </div>
      </footer>
    </article>`);
    return $tweet; 
  };

  const renderTweet = (tweetsArray) => {
    for(const tweet of tweetsArray) {
      const $tweet = createTweetElement(tweet);
      $($tweetContainer).append($tweet); 

    }
  }; 

  renderTweet(tweetData); 
  
});




