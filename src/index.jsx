var React         = require('react'),
    ReactDOM      = require('react-dom'),
    TestComponent = require('./components/TestComponent.jsx'),
    Dex           = require('./components/Dex.jsx'),
    DexContainer  = require('./components/DexContainer.jsx');

ReactDOM.render(
  <DexContainer/>,
  document.getElementById("react-container")
);