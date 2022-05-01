import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import SplashScreen from './SplashScreen.vue';

describe('SplashScreen.vue', () => {
  test('should render', () => {
    const { container } = render(SplashScreen);

    expect(screen.getByRole('heading', { name: 'Tradly' })).toBeInTheDocument();
    expect(screen.getByAltText('Tradly logo')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
