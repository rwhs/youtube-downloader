import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Handlers
  handleSubmit(e) {
    e.preventDefault();
    console.log(`URL added to queue: ${this.props.url}`);

    this.props.handleReady(''); // Disable dl button until dl is complete
    this.props.handleIsProcessing();

    // POST request
    axios.post('http://localhost:4000/post', { "url": this.props.url })
      .then(res => {
        this.props.handleReady(res.data.downloadIsReady);
        this.props.handleIsProcessing();
      })
    this.props.onInputChange(''); // Reset field
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  // Render component
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input"
            type="text"
            value={this.props.url}
            onChange={this.handleChange}
            placeholder="YouTube URL"
            />
          </div>
          <div className="control">
            <button className="button is-danger" type="submit">Add video</button>
          </div>
        </div>
      </form>
    );
  }
}


export default InputBox;
