$(document).ready(function() {
  const countChars = function(event) {
    const $tweetVal = $(this).val();
    const $counter = $(this).siblings('div').children('.counter');
    $counter.text(140 - $tweetVal.length);
    if (parseInt($counter.text()) < 0) {
      $counter.css('color', 'red');
    } else {
      $counter.css('color', '#545149');
    }
  };
  $('#tweet-text').on("input", countChars);

});

