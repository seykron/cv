/** Displays a speech bubble and show filtered tweets messages.
 * @param {Element} container Element which the speech bubble is attached to.
 *   Cannot be null.
 * @param {String} searchCriteria Twitter search criteria. Cannot be null.
 */
TweetyBubble = function (container, searchCriteria) {

  /** JSONP global callback.
   * @constant
   * @memberOf TweetyBubble
   */
  var JSONP_CALLBACK = "Tweety.TweetsJsonHandler";

  /** Twitter search service url.
   * @constant
   * @memberOf TweetyBubble
   */
  var SEARCH_URL = "http://search.twitter.com/search.json?";

  /** Tweets roation inverval.
   * @constant
   * @memberOf TweetyBubble
   */
  var REFRESH_INTERVAL = 10000;

  /** List of tweets to display.
   * @type Object[]
   */
  var tweets = [];

  /** Index of the currently displayed tweet.
   * @type Number
   * @private
   * @memberOf TweetyBubble
   */
  var displayIndex = 0;

  /** Query string to fetch the next tweets page. Provided by Twitter.
   * @type String
   * @private
   * @memberOf TweetyBubble
   */
  var nextPageQueryString = "q=" + escape(searchCriteria);

  /** Element where the tweet text is displayed.
   * @type Element
   * @private
   * @memberOf TweetyBubble
   */
  var label;

  /** Displays the next tweet in the queue.
   * @private
   * @memberOf TweetyBubble
   */
  var displayNext = function () {
    var tweet = tweets[displayIndex];

    if (!tweet) {
      return;
    }

    label.prop("title", tweet.text);

    if (tweet.text.length > 80) {
      label.html(tweet.text.substr(0, 80) + "...");
    } else {
      label.html(tweet.text);
    }
    displayIndex += 1;
    label.show();
    return true;
  };

  /** Fetches the next page of tweets from the Search API, applying the search
   * criteria specified in the constructor.
   *
   * @param {Function} callback Function invoked when the new tweets are
   *   already processed. Cannot be null.
   * @private
   * @memberOf TweetyBubble
   */
  var fetchNextTweets = function (callback) {
    var params = "callback=?&" + nextPageQueryString;

    if (!nextPageQueryString) {
      displayIndex = 0;
      callback();
      return;
    }

    jQuery.getJSON(SEARCH_URL + params, function (response) {
      nextPageQueryString = response.refresh_url;

      if (nextPageQueryString) {
        nextPageQueryString = response.refresh_url.substr(1);
      }

      tweets = tweets.concat(response.results);
      callback();
    });
  };

  /** Rotates the speech bubble displaying the next tweet, or returning to the
   * first one if no more tweets are available.
   * @private
   * @memberOf TweetyBubble
   */
  var rotate = function () {
    if (displayIndex >= tweets.length) {
      fetchNextTweets(function () {
        if (displayNext()) {
          setTimeout(rotate, REFRESH_INTERVAL);
        } else {
          rotate();
        }
      });
    } else {
      displayNext();
      setTimeout(rotate, REFRESH_INTERVAL);
    }
  };

  return {
    /** Renders the message bubble. It gerates the following HTML layout:
     * <div class="tweety-bubble">
     *   <p class="message"><!-- Message goes here --></p>
     * </div>
     */
    render: function () {
      var offset = jQuery(container).offset();
      label = jQuery("<div />", {
        "class": "tweety-bubble"
      }).appendTo(document.body);
      label.css({
        position: "absolute",
        left: (offset.left - label.width()) + "px",
        top: (offset.top - label.height()) + "px"
      });
      label.hide();
      setTimeout(rotate, 2000);
    }
  };
};
