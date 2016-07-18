
import React from 'react';
import Foo from '../src/foo'; // Foo is the Class, 'foo' is the module
import {expect} from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme'; // shallow is a function

describe('Foo Test with Shallow', () => {

  it('.commentBox contains the text "Hello World!"', () => {

    /**
    Shallow Rendering:
     - prevents errors deep in your node tree from affecting all your tests
     - removes the requirement to mock a ton of objects.

     e.g. HERE we want to test that the div contains the text 'Hello, world!'
     and we're not bothered about its component dependencies
    */

    // test setup
    sinon.spy(Foo.prototype, 'render');
    // the test - render only Foo and we don't need to mock it's children
    const foo = shallow(<Foo />);
    const div = foo.find('.commentBox');
    // the assertion
    expect(div.first().text()).to.equal('Hello, world!');
  });

});
