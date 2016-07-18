
import React from 'react';
import Foo from '../src/foo'; // Foo is the Class, 'foo' is the module
import {expect} from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme'; // mount is a function

describe('Foo Test with Mount', () => {

  it('calls componentDidMount', () => {

    // here we care about ALL the dependencies of Foo
    // if there's an error in foo's dependency - TableRow -
    // the test will fail.
    // TRY IT: Add an undefined component to TableRow and run the test.

    // test setup
    sinon.spy(Foo.prototype, 'componentDidMount');

    // the test - can we mount Foo into the DOM?
    const wrapper = mount(<Foo />);

    // the assertion
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
