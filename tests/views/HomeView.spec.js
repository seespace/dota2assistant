import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { bindActionCreators } from 'redux';
import { HomeView } from 'views/HomeView';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<HomeView {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<HomeView {...props} />);
}

describe('(View) Home', function () {
  let _component, _props, _spies;

  beforeEach(function () {
    _spies = {};
    _props = {
      setting: {
        firstPick: false
      },
      ...bindActionCreators({
        togglePick: (_spies.togglePick = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };

    _component = shallowRenderWithProps(_props);
    renderWithProps(_props);
  });

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div');
  });
});
