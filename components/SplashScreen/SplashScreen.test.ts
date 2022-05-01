import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import SplashScreen from './SplashScreen.vue';

describe('SplashScreen.vue', () => {
  test('should render', () => {
    const { container } = render(SplashScreen);

    const heading = screen.getByRole('heading', { name: 'Tradly' });
    expect(heading).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
