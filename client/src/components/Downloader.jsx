import React from 'react';
import InputBox from './InputBox';

class Downloader extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputBoxChange = this.handleInputBoxChange.bind(this);

    this.state = {url: ''};
  }

  handleInputBoxChange(inputUrl) {
    this.setState({url: inputUrl});
  }

  render() {
    return (
      <InputBox 
      url={this.state.url}
      onInputChange={this.handleInputBoxChange}
      />
    )
  }
}

export default Downloader;
