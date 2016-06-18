var React    = require('react'),
    ReactDOM = require('react-dom');

var Dex = React.createClass({

  render: function() {
    return (
      <div>
        {
          this.props.list.map(function(poke){
            return <button key={poke.name}>{poke.name}</button>
          })
        }
      </div>
  )
  },
});

module.exports = Dex;