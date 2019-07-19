import React from 'react';
import axios from 'axios';
const fileDownload = require('js-file-download');

class DownloadButton extends React.Component {

  handleDownload() {
    axios.get('http://localhost:4000/download', {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, 'video.mp4')
    })
    console.log('Requested download');
  }

  render() {
    return (
      <button className="button is-link" disabled={!this.props.isReady} onClick={this.handleDownload}>Download</button>
    )
  }
}

export default DownloadButton;
