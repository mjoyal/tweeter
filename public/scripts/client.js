/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

 const fetchTweets = () => {
  $.ajax({
    url: '/tweets', 
    method: 'GET', 
    dataType: 'json', 
    success: (posts) => {renderTweet(posts)}, 
    error: (error) => {console.error(error)}
  });
 }; 
 fetchTweets(); 
  const createTweetElement = function (data) {
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

  const renderTweet = function (tweets) {
    const $tweetContainer = $('#tweets-container'); 
    $tweetContainer.empty(); 
    for(const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $($tweetContainer).prepend($tweet); 

    }
  };  


  $('#tweet-form').submit(function (event) {
    event.preventDefault(); 
    const serializedData = $(this).serialize(); 
      $.post('/tweets', serializedData)
        .then((response) => {
          fetchTweets(); 
      })
  })


});




