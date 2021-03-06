import React from 'react';
import TableRow from '../src/TableRow.js';

const Foo = React.createClass({
  componentDidMount: function(){
    // implement this React method if you need access to a full browser DOM
    // this is the point in the React component lifecycle where the browser DOM
    // APIs are available.
  },
  render: function() {
    return (
      <div className="foo-bar">
        <div className="commentBox">
          Hello, world!
        </div>
        <div className="foo-bar">
          <TableRow />
          <TableRow />
          <TableRow />
        </div>
        <div className="foo-bar">
          Hola Mundo!
        </div>
      </div>
    );
  }
});

export default Foo;
