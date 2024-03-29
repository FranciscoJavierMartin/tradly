import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import SplashScreen from './SplashScreen.vue';

describe('SplashScreen.vue', () => {
  test('should render', () => {
    const { container } = render(SplashScreen);

    expect(
      screen.getByRole('heading', { name: 'Hello world' })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
