import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerContent content has-text-centered">
          <p><a class="footerLink" href="https://github.com/rwhs">Ronald So</a> |  <a class="footerLink" href="https://github.com/rwhs/youtube-downloader">See the source code on GitHub <FontAwesomeIcon icon={faGithub} /></a></p>
        </div>
      </footer>
    )
  }
}

export default Footer;
