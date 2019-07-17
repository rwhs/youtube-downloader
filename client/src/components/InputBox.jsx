import React from 'react';

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

    this.props.onInputChange('');
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input className="form-control" type="text" value={this.props.url} onChange={this.handleChange} />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">Add to queue</button>
          </div>
        </div>
        <h1>{this.props.url}</h1>
      </form>
    );
  }
}


export default InputBox;
