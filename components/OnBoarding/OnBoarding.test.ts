import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import OnBoarding from './OnBoarding.vue';

describe('OnBoarding.vue', () => {
  test('should render', () => {
    const { container } = render(OnBoarding);

    expect(
      screen.getByRole('heading', {
        name: /Empowering Artisans, Farmers & Micro Business/i,
      })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
