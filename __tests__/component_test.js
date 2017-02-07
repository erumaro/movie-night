import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MovieDetails } from '../js/containers/movie_details';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import * as types from "../js/constants/ActionTypes.js";

describe('components', function() {
  describe('<MovieDetails />', function() {

    it('Link renders correctly', () => {
  const tree = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

  });
});

