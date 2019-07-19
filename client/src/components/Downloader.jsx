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
    this.setState({url: inputUrl});
  }

  handleDownloadIsReady(isReadyInput) {
    this.setState({downloadIsReady: isReadyInput})
  }

  handleIsProcessing() {
    this.setState({isProcessing: !this.state.isProcessing})
  }

// Render
  render() {
    return (
      <div>
      <InputBox 
      url={this.state.url}
      onInputChange={this.handleInputBoxChange}
      handleReady={this.handleDownloadIsReady}
      handleIsProcessing={this.handleIsProcessing}
      />
      {this.state.isProcessing ? (
        <h1>Processing</h1>
      ) : (
        <DownloadButton isReady={this.state.downloadIsReady}/>
      )}
      </div>
    )
  }
}

export default Downloader;
