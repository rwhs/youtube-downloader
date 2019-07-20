import React from 'react';
import InputBox from './InputBox';
import DownloadButton from './DownloadButton';

class Downloader extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputBoxChange = this.handleInputBoxChange.bind(this);
    this.handleDownloadIsReady = this.handleDownloadIsReady.bind(this);
    this.handleIsProcessing = this.handleIsProcessing.bind(this);

    this.state = {
      url: '',
      downloadIsReady: '',
      isProcessing: false,
    };
  }

  // Handlers
  handleInputBoxChange(inputUrl) {
    this.setState({ url: inputUrl });
  }

  handleDownloadIsReady(isReadyInput) {
    this.setState({ downloadIsReady: isReadyInput })
  }

  handleIsProcessing() {
    this.setState({ isProcessing: !this.state.isProcessing })
  }

  // Render
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="box inputContainer">
            <InputBox
              url={this.state.url}
              onInputChange={this.handleInputBoxChange}
              handleReady={this.handleDownloadIsReady}
              handleIsProcessing={this.handleIsProcessing}
            />
          </div>
          <div className="downloadButtonContainer">
          {this.state.isProcessing ? (
            <button className="button is-danger is-loading" disabled="true">Download</button>
          ) : (
              <DownloadButton isReady={this.state.downloadIsReady} />
            )}
          </div>
        </div>

      </div>
    )
  }
}

export default Downloader;
