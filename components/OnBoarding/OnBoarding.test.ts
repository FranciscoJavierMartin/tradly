import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/vue';
import OnBoarding from './OnBoarding.vue';
import slidesMock from './mock';

describe('OnBoarding.vue', () => {
  test('should render', () => {
    const { container } = render(OnBoarding, {
      props: {
        slides: slidesMock,
      },
    });

    expect(
      screen.getByRole('heading', {
        name: slidesMock[0].text,
      })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should move to the next slide when click on "Next" button', async () => {
    render(OnBoarding, {
      props: {
        slides: slidesMock,
      },
    });
    await fireEvent.click(screen.getByRole('button', { name: /Next/i }));
    expect(
      screen.getByRole('heading', { name: slidesMock[1].text })
    ).toBeInTheDocument();
  });
});
