var React    = require('react'),
    ReactDOM = require('react-dom');
var Poke = require('./Poke.jsx');


var PokeContainer = React.createClass({
  getInitialState: function() {
    return {
      data: {  }
    };
  },

  // componentDidMount: function() {
  //   var url = 'http://localhost:3000/poke/' + this.props.url.slice(41, -1);
  //   request(url, function (error, response, body) {
  //     console.log('request made');
  //     this.setState({
  //       data: JSON.parse(body)
  //     });
  //   }.bind(this));
  // },

  // componentWillUnmount: function() {
  //   console.log('unmount');
  //   // this.serverRequest.abort();
  // },

  render: function() {
    console.log(this.props.url);
    console.log('data');
    console.log(this.state.data);
    return (
      <Poke data={this.state.data.pokemon_entries} />
  )
  },
});

module.exports = PokeContainer;