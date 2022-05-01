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
    expect(
      screen.getByRole('heading', { name: /Login to your account/i })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Forgot your password/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
