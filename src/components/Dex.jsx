var React    = require('react'),
    ReactDOM = require('react-dom');
var Grid = require('react-bootstrap').Grid,
    Row  = require('react-bootstrap').Row,
    Col  = require('react-bootstrap').Col;
var PokeContainer = require('./PokeContainer.jsx');


var Dex = React.createClass({
  loadPoke: function(url){
    ReactDOM.unmountComponentAtNode(document.getElementById("info-container"));
    ReactDOM.render(
      <PokeContainer url={url}/>,
      document.getElementById("info-container")
    );
  },

  render: function() {
    var _this = this;
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <span id="info-container"></span>
          </Col>
          <Col xs={6}>
            <Row className="list">
              {
                this.props.data.map(function(poke){
                  return <Col xs={12} key={poke.entry_number} onClick={() => _this.loadPoke(poke.pokemon_species.url)}>{poke.pokemon_species.name}</Col>
                })
              }
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  },
});

module.exports = Dex;