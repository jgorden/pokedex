var React    = require('react'),
    ReactDOM = require('react-dom');
var DexContainer = require('./DexContainer.jsx');

var DexList = React.createClass({
  
  loadDex: function() {
    ReactDOM.render(
      <DexContainer />,
      document.getElementById("react-container")
    );
  },

  render: function() {
    return (
      <div>
        {
          this.props.list.map(function(dex){
            return <button key={dex.name} onClick={this.loadDex}>{dex.name}</button>
          })
        }
      </div>
  )
  },
});

module.exports = DexList;