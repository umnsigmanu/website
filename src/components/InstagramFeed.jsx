import React, { Component } from 'react';

export default class InstagramFeed extends Component {
  render() {
    return (
      <div className="embedsocial-hashtag" data-ref={'ed8602d40f13f896e24fedb29b01dc5b029fb333'} />
    );
  }

  componentDidMount() {
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/embedscript/ri.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "embedSocialReviewsScript");
  }
}