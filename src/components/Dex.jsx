var React    = require('react'),
    ReactDOM = require('react-dom');
var PokeContainer = require('./PokeContainer.jsx');


var Dex = React.createClass({
  loadPoke: function(url){
    console.log('click');
    ReactDOM.unmountComponentAtNode(document.getElementById("info-container"));
    ReactDOM.render(
      <PokeContainer url={url}/>,
      document.getElementById("info-container")
    );
  },

  render: function() {
    var _this = this;
    return (
      <div>
        <span id="info-container"></span>
        {
          this.props.data.map(function(poke){
            return <button key={poke.entry_number} onClick={() => _this.loadPoke(poke.pokemon_species.url)}>{poke.pokemon_species.name}</button>
          })
        }
      </div>
    )
  },
});

module.exports = Dex;