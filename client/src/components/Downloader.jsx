import React from 'react';
import InputBox from './InputBox';
import DownloadButton from './DownloadButton';

class Downloader extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputBoxChange = this.handleInputBoxChange.bind(this);
    this.handleDownloadIsReady = this.handleDownloadIsReady.bind(this);

    this.state = {
      url: '',
      downloadIsReady: '',
    };
  }

  handleInputBoxChange(inputUrl) {
    this.setState({url: inputUrl});
  }

  handleDownloadIsReady() {
    if (this.state.downloadIsReady == '') {
      this.setState({downloadIsReady: true})
    } else if (this.state.downloadIsReady == true) {
      this.setState({downloadIsReady: ''})
    }
  }

  render() {
    return (
      <div>
      <InputBox 
      url={this.state.url}
      onInputChange={this.handleInputBoxChange}
      handleReady={this.handleDownloadIsReady}
      />
      <DownloadButton isReady={this.state.downloadIsReady}/>
      </div>
    )
  }
}

export default Downloader;
