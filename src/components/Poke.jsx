var React    = require('react'),
    ReactDOM = require('react-dom');
var Sprite = require('./PokeComponents/Sprite.jsx');


var Poke = React.createClass({
  render: function() {
    var name;
    if(this.props.data.name){ name = this.props.data.name }
    return (
      <div>
        <Sprite src={this.props.data.sprites} />
        {name}
      </div>
    )
  },
});

module.exports = Poke;