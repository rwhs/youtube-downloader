import React from 'react';

class DownloadButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="button is-link" disabled={!this.props.isReady}>Download</button>
    )
  }
}

export default DownloadButton;
