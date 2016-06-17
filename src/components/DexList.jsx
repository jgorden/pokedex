var React = require('react');

var DexList = React.createClass({

  render: function() {
    return (
      <div>
        {
          this.props.list.map(function(dex){
            return <button key={dex.name}>{dex.name}</button>
          })
        }
      </div>
  )
  },
});

module.exports = DexList;