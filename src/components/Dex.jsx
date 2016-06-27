var React    = require('react'),
    ReactDOM = require('react-dom');

var Dex = React.createClass({

  render: function() {
    return (
      <div>
        'we pokemon now'
        {
          this.props.data.map(function(poke){
            return <p key={poke.entry_number}>{poke.pokemon_species.name}</p>
          })
        }
      </div>
    )
  },
});

module.exports = Dex;