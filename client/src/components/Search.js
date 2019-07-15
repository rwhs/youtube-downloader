import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="YouTube Video URL"></input>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add to queue</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
