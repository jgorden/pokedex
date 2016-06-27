var React    = require('react'),
    ReactDOM = require('react-dom');
var DexContainer = require('./DexContainer.jsx');

var DexList = React.createClass({
  
  loadDex: function(url) {
    console.log('url');
    console.log(url);
    ReactDOM.render(
      <DexContainer url={url}/>,
      document.getElementById("react-container")
    );
  },

  render: function() {
    var _this = this;
    return (
      <div>
        {
          this.props.list.map(function(dex){
            return <button key={dex.name} onClick={() => _this.loadDex(dex.url)}>{dex.name}</button>
          })
        }
      </div>
  )
  },
});

module.exports = DexList;