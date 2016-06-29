var React    = require('react');
var request = require('request');
var Poke = require('./Poke.jsx');


var PokeContainer = React.createClass({
  getInitialState: function() {
    return {
      data: {
        standard: {
          sprites: { 
            src: { 
              front_default: null, 
              back_default: null 
            } 
          } 
        } 
      }
    };
  },

  componentDidMount: function() {
    var url = 'http://localhost:3000/poke/' + this.props.url.slice(41, -1);
    console.log(this.props.url.slice(41, -1));
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
    console.log(this.props.url);
    console.log('data');
    console.log(this.state.data);
    return (
      <Poke data={this.state.data} />
  )
  },
});

module.exports = PokeContainer;