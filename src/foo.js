import React from 'react';
import TableRow from '../src/TableRow.js';

var Foo = React.createClass({
  componentDidMount: function(){
    // implement this React method if you need access to a full browser DOM
    // this is the point in the React component lifecycle where the browser DOM
    // APIs are available.
  },
  render: function() {
    return (
      <div>
        <div className="commentBox">
          Hello, world!
        </div>
        <TableRow />
        <TableRow />
        <TableRow />
      </div>
    );
  }
});

export default Foo;
