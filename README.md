# Tweeter Project

Tweeter is a simple, single-page Twitter clone. Tweeter uses jQuery, AJAX, HTML5, and SASS. Users are able to submit new tweets which will immediately make a request to the server and render the tweet on the page in reverse-chronological order. The tweet history will show tweets with a user name and avatar, the tweet content, and display the time elapsed since the tweet was posted. The single-page app is optimized for desktop and tablet views. The navigation contains an animated button that will hide and show the textarea that creates new tweets. The textarea will be focused when shown. When users try to submit a tweet without any text or with text greater than 140 characters, an error message will be shown. Finally, a dynamic counter will show to update the user on the amount of characters they have left. 

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
