var React = require('react');
var request = require('request');

var Dex = React.createClass({
  getInitialState: function() {
    return {
      data: 'eyyyyyy'
    };
  },

  componentDidMount: function() {
    this.serverRequest = request('http://localhost:3000/dex', function (error, response, body) {
      console.log('response');
      console.log(response);
      console.log('body');
      console.log(body);
      this.setState({
        data: body
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        hi friend
        {this.state.data}
      </div>
  )},
});

module.exports = Dex;