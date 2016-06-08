webpackJsonp([1],[
/* 0 */
/*!***********************!*\
  !*** ./src/other.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(/*! react */ 1),
	    ReactDOM = __webpack_require__(/*! react-dom */ 158);
	
	var AnotherComponent = React.createClass({
	  displayName: 'AnotherComponent',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      'Hello Again'
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(AnotherComponent, null), document.getElementById("react-container"));

/***/ }
]);
//# sourceMappingURL=other.js.map