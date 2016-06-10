var React         = require('react'),
    ReactDOM      = require('react-dom'),
    TestComponent = require('./components/TestComponent.jsx'),
    Dex           = require('./components/Dex.jsx');

ReactDOM.render(
  <Dex/>,
  document.getElementById("react-container")
);