const React = require('react');
const Nav = require('./nav');

const sampleApp = [];
sampleApp.push(require('./forms/book-view'));
sampleApp.push(require('./tree/tree-view'));
sampleApp.push(require('./grid/grid-view'));

React.render(<Nav sampleApp={sampleApp}/>, document.getElementById("nav"));