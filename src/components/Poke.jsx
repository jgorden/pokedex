var React    = require('react'),
    ReactDOM = require('react-dom');
var Sprite = require('./PokeComponents/Sprite.jsx');


var Poke = React.createClass({
  render: function() {
    
    return (
      <div>
        <Sprite src={this.props.data.standard.sprites} />
        {this.props.data.standard.name}
      </div>
    )
  },
});

module.exports = Poke;