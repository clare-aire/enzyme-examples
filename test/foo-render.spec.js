
import React from 'react';
import Foo from '../src/foo'; // Foo is the Class, 'foo' is the module
import {expect} from 'chai';
import sinon from 'sinon';
import { render } from 'enzyme'; // render is a function

describe('Foo Test with Render', () => {

  it('checks that ', () => {

    /**
    HTML Rendering example:
      Here we're just rendering HTML we're not touching the DOM at all
    */
    const wrapper = render(<Foo />);
    expect(wrapper.find('.foo-bar')).to.have.length(3);

  });

});
