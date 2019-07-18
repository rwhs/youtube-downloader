import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`URL added to queue: ${this.props.url}`);

    axios.post('http://localhost:4000/test', {'test': 'Testing request'})
    .then(res => {
      console.log(res.data)
    });
    
    this.props.onInputChange('');
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <input className="input" type="text" value={this.props.url} onChange={this.handleChange} />
          <div className="control">
            <button className="button is-link" type="submit">Add to queue</button>
          </div>
        </div>
        <h1>{this.props.url}</h1>
      </form>
    );
  }
}


export default InputBox;
