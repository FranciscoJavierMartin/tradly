import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import RegisterScreen from './RegisterScreen.vue';

describe('RegisterScreen.vue', () => {
  test('should render', () => {
    const { container } = render(RegisterScreen);

    expect(
      screen.getByRole('heading', { name: /Welcome to tradly/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Signup to your account/i })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Sign in/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
