webpackJsonp([0],{

/***/ 0:
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(/*! react */ 1),
	    ReactDOM = __webpack_require__(/*! react-dom */ 158),
	    TestComponent = __webpack_require__(/*! ./components/TestComponent.jsx */ 159);
	
	ReactDOM.render(React.createElement(TestComponent, null), document.getElementById("react-container"));

/***/ },

/***/ 159:
/*!******************************************!*\
  !*** ./src/components/TestComponent.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(/*! react */ 1);
	
	var TestComponent = React.createClass({
	   displayName: 'TestComponent',
	
	   render: function render() {
	      return React.createElement(
	         'div',
	         null,
	         'Test'
	      );
	   }
	});
	
	module.exports = TestComponent;

/***/ }

});
//# sourceMappingURL=main.js.map