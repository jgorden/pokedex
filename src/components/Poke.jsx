var React    = require('react'),
    ReactDOM = require('react-dom');
var Sprite = require('./PokeComponents/Sprite.jsx');


var Poke = React.createClass({
  render: function() {
    var type = [];
    if(this.props.data.standard.types){ type = this.props.data.standard.types; }
    return (
      <div>
        <Sprite src={this.props.data.standard.sprites} /><br />
        {this.props.data.standard.name}<br />
        {this.props.data.species.flavor_text_entries[1].flavor_text}<br />
        {type.map(function(t){
          return t.type.name
        })}
      </div>
    )
  },
});

module.exports = Poke;