
import React from 'react';
import Foo from '../src/foo'; // Foo is the Class, 'foo' is the module
import {expect} from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme'; // mount is a function

describe('Foo Test with Mount', () => {

  it('calls componentDidMount', () => {

    // here we really care about ALL the dependencies of Foo

    // test setup
    sinon.spy(Foo.prototype, 'componentDidMount');

    // the test
    const wrapper = mount(<Foo />);

    // the assertion
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
