var React = require('react');
var request = require('request');
var Dex = require('./Dex.jsx');

var DexContainer = React.createClass({
  getInitialState: function() {
    return {
      data: { pokemon_entries: [] }
    };
  },

  componentDidMount: function() {
    var url = 'http://localhost:3000/dex/' + this.props.url.slice(33, -1);
    request(url, function (error, response, body) {
      console.log('request made');
      this.setState({
        data: JSON.parse(body)
      });
    }.bind(this));
  },

  // componentWillUnmount: function() {
  //   console.log('unmount');
  //   // this.serverRequest.abort();
  // },

  render: function() {
    // console.log('render');
    console.log('data');
    console.log(this.state.data);
    return (
      <Dex data={this.state.data.pokemon_entries} />
  )
  },
});

module.exports = DexContainer;