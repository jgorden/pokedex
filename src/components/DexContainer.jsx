var React = require('react');
var request = require('request');
var Dex = require('./Dex.jsx');

var DexContainer = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = request('http://localhost:3000/dex', function (error, response, body) {
      // console.log('response');
      // console.log(response);
      // console.log('body');
      // console.log(body);
      this.setState({
        data: JSON.parse(body)
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
     var dexList = this.state.data;
      // for (var i = 0; i < this.state.data.length; i++){
      //   dexList[i] = this.state.data[i].name
      // }
    // dexList.forEach(function(dex){
    //   dexList.push(dex);
    // });
    console.log('data');
    console.log(this.state.data);
    return (
      <Dex dexList={this.state.data} />
  )
  },
});

module.exports = DexContainer;