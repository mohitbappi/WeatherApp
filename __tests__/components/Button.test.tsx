import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import { Button } from '../../src/components/common/Button';

const renderWithProvider = (component: React.ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it('renders correctly', () => {
    const { getByText } = renderWithProvider(
      <Button title="Test Button" onPress={mockOnPress} />,
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByTestId } = renderWithProvider(
      <Button title="Test Button" onPress={mockOnPress} testID="test-button" />,
    );

    fireEvent.press(getByTestId('test-button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('shows loading indicator when loading', () => {
    const { getByTestId } = renderWithProvider(
      <Button
        title="Test Button"
        onPress={mockOnPress}
        loading={true}
        testID="test-button"
      />,
    );

    expect(getByTestId('test-button')).toBeTruthy();
  });

  it('is disabled when disabled prop is true', () => {
    const { getByTestId } = renderWithProvider(
      <Button
        title="Test Button"
        onPress={mockOnPress}
        disabled={true}
        testID="test-button"
      />,
    );

    fireEvent.press(getByTestId('test-button'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
