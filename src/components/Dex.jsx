var React = require('react');
var request = require('request');

var Dex = React.createClass({


  render: function() {
    return (
      <div>
        {
          this.props.dexList.map(function(dex){
            return <button>{dex.name}</button>
          })
        }
      </div>
  )
  },
});

module.exports = Dex;