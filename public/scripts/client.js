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

 const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  }

  const createTweetElement = function (data) {
    const $tweet = $(`<article>
      <header>
        <div class="user-tweet-info">
          <img src=${escape(data.user.avatars)} alt="Profile Avatar">
          <p>${escape(data.user.name)}</p>
        </div>
        <p class="tweet-username">${escape(data.user.handle)}</p>
      </header>
      <p class="old-tweet-text">${escape(data.content.text)}</p>
      <footer>
        <p>${escape(data.created_at)}</p>
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

  const formValidation = () => {
    const $textValue = $('#tweet-text').val(); 
    if($textValue === "") {
      return 1; 
    } else if ($textValue.length > 140) {
      return 2; 
    }
    return false; 
  }; 

  const errorMessage = (message) => {
    const $errorContainer = $('#error-message');
    $errorContainer.empty(); 
    const $error = $(`<p>
    <i class="fas fa-skull-crossbones"></i>
    ${escape(message)}
    <i class="fas fa-skull-crossbones"></i>
    </p>`); 
    $errorContainer.append($error); 
  }; 

  const errorStatus = function (error) {
    if(error) {
      $('#error-message').slideDown(); 
    } else {
      $('#error-message').slideUp(); 
    }
  }; 

  $('#tweet-form').submit(function (event) {
    event.preventDefault(); 
    const formValid = formValidation();
    if(!formValid) {
      errorStatus(false); 
      const serializedData = $(this).serialize(); 
      $.post('/tweets', serializedData)
        .then((response) => {
          fetchTweets(); 
      })
      $('#tweet-text').val('');
      $('.counter').html(140);
    } else if (formValid === 1) {
      errorMessage('Please enter a tweet. #yaboring'); 
      errorStatus(true); 
    } else {
      errorMessage('Tweets cannot be longer than 140 characters. #wecountedforyou #commondude'); 
      errorStatus(true); 
    }
  })


});


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