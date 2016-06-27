var React = require('react');
var request = require('request');
var DexList = require('./DexList.jsx');

var DexListContainer = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  componentDidMount: function() {
    request('http://localhost:3000/dex', function (error, response, body) {
      this.setState({
        data: JSON.parse(body)
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    // this.serverRequest.destroy();
  },

  render: function() {
    // console.log('data');
    // console.log(this.state.data);
    return (
      <DexList list={this.state.data} />
  )
  },
});

module.exports = DexListContainer;