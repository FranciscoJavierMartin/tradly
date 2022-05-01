import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import OnBoardingSlide from './OnBoardingSlide.vue';

describe.skip('OnBoardingSlide.vue', () => {
  test.skip('should render', () => {
    const { container } = render(OnBoardingSlide);

    expect(
      screen.getByRole('heading', { name: /OnBoardingSlide/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
