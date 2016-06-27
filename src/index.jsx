var React             = require('react'),
    ReactDOM          = require('react-dom'),
    TestComponent     = require('./components/TestComponent.jsx'),
    DexList           = require('./components/DexList.jsx'),
    DexListContainer  = require('./components/DexListContainer.jsx');

ReactDOM.render(
  <DexListContainer/>,
  document.getElementById("react-container")
);