var React    = require('react'),
    ReactDOM = require('react-dom');

var Sprite = React.createClass({
  render: function() {
    return (
      <div>
        <img src={this.props.src.back_default} alt="#" />
        <img src={this.props.src.front_default} alt="#" />
        {name}
      </div>
    )
  },
});

module.exports = Sprite;