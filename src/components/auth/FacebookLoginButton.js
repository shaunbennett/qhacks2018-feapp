'use strict';

import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

/**
 *
 *
 * @class FacebookLoginButton
 * @extends {Component}
 */
class FacebookLoginButton extends Component {
  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response) {
    console.log('FACEBOOK AUTH', response);
  }

  componentDidMount() {}

  render() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appID: '926916724132817',
        cookie: true,
        xfbml: true,
        version: 'v2.11'
      });
      console.log('Asyn Executed');
      window.FB.getLoginStatus(function(response) {
        console.log(response);
      });
    }.bind(this);

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src =
        'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=926916724132817';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
    if (window.FB) {
      window.FB.getLoginStatus(function(response) {
        console.log('Response:', response);
      });
    }
    return (
      <FacebookLogin
        appID="926916724132817"
        // autoLoad={true}
        size="small"
        xfbml={true}
        cookie={true}
        version="2.11"
        scope="email"
        fields="name,email"
        callback={this.responseFacebook}
      />
    );
  }
}

export default FacebookLoginButton;
