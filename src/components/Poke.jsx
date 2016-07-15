var React    = require('react'),
    ReactDOM = require('react-dom');
var Sprite = require('./PokeComponents/Sprite.jsx');


var Poke = React.createClass({
  talk: function(msg){
    window.speechSynthesis.speak(msg);
  },
  
  render: function() {
    var type = [];
    var msg = new SpeechSynthesisUtterance(this.props.data.species.flavor_text_entries[1].flavor_text);
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[4]; // Note: some voices don't support altering params

    if(this.props.data.standard.types){ type = this.props.data.standard.types; }
    return (
      <div>
        <button onClick={() => this.talk(msg)}>speak</button>
        {this.props.data.standard.id}&nbsp;
        {this.props.data.standard.name}<br />
        <Sprite src={this.props.data.standard.sprites} /><br />
        {this.props.data.species.flavor_text_entries[1].flavor_text}<br />
        {type.map(function(t){
          return t.type.name
        })}
      </div>
    )
  },
});

module.exports = Poke;