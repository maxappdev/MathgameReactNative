import React from 'react';
import Home from '../../screens/Home';
import renderer from 'react-test-renderer';

const homeScreenJson = renderer.create(<Home />).toJSON()

describe('Home Screen', () => {
  it('renders correctly', () => {
    expect(homeScreenJson).toMatchSnapshot();
  });
})
