import React from 'react';
import TableRow from '../src/TableRow.js';

var Foo = React.createClass({
  componentDidMount: function(){
    // use this if you need access to a full browser DOM
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
