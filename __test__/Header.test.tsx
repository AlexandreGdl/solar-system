import React from 'react';
import { cleanup, screen } from '@testing-library/react-native';
import { Header } from '../src/components';
import {
  useNavigationMock,
  render as CustomRender,
} from '../src/test/test-utils';
import theme from '../src/theme';

// Creating Navigation
jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  };
});
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));

// Clean up before test
afterEach(cleanup);
// Reset Mock navigation
beforeEach(() => {
  useNavigationMock.mockReset();
});

it('renders correctly header with go back button & title', () => {
  CustomRender(<Header goBack title="Testing" />);
  const { getByTestId } = screen;

  const header = getByTestId('header');

  expect(
    header.props.children.filter(
      (el: JSX.Element | undefined) => el !== undefined
    ).length
  ).toEqual(2);
});

it('renders correctly header with no go back button but title', () => {
  CustomRender(<Header title="Testing" />);
  const { getByTestId } = screen;

  const header = getByTestId('header');
  // Remove undefined from the children because when elem not display
  // it add undefined to children
  expect(
    header.props.children.filter(
      (el: JSX.Element | undefined) => el !== undefined
    ).length
  ).toEqual(1);
});

it('renders correctly header with title matching theme', () => {
  CustomRender(<Header title="Testing" />);
  const { getByText } = screen;
  const headerTitle = getByText('Testing');
  // Expect title to have only styled-component style
  expect(headerTitle.props).toHaveProperty('style');
  expect(headerTitle.props.style.length).toBeGreaterThan(0);
  expect(headerTitle.props.style[0]).toHaveProperty('color');
  expect(headerTitle.props.style[0].color).toEqual(theme.colors.text.primary);
});
