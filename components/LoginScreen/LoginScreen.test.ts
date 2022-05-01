import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import LoginScreen from './LoginScreen.vue';

describe('LoginScreen.vue', () => {
  test('should render', () => {
    const { container } = render(LoginScreen);

    expect(
      screen.getByRole('heading', { name: /Welcome to tradly/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
