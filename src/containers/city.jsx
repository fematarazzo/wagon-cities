import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div className="col-sm-5" style={{height: '100vh'}}>
        <h3>this.props.city.name</h3>
        
      </div>
    );
  }
}

export default City;
