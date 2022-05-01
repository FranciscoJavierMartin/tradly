import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/vue';
import OnBoardingSlide from './OnBoardingSlide.vue';
import slideMocks from '../OnBoarding/mock';

describe('OnBoardingSlide.vue', () => {
  test('should render', () => {
    const { container } = render(OnBoardingSlide, {
      props: {
        slide: slideMocks[0],
        currentIndex: 1,
        amountOfSlides: 3,
      },
    });

    expect(
      screen.getByRole('heading', { name: slideMocks[0].text })
    ).toBeInTheDocument();
    expect(screen.getByAltText(slideMocks[0].text)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should be the first step be highlight', () => {
    render(OnBoardingSlide, {
      props: {
        slide: slideMocks[0],
        currentIndex: 1,
        amountOfSlides: 3,
      },
    });

    const activeElements = document.querySelectorAll(
      '.c-on-boarding-slide__steps--active'
    );
    expect(activeElements.length).toBe(1);
  });

  test('should show "Next" on the button when item is not the last', () => {
    render(OnBoardingSlide, {
      props: {
        slide: slideMocks[0],
        currentIndex: 1,
        amountOfSlides: 3,
      },
    });

    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  test('should show "Next" on the button when item is not the last', () => {
    render(OnBoardingSlide, {
      props: {
        slide: slideMocks[0],
        currentIndex: 3,
        amountOfSlides: 3,
      },
    });

    expect(screen.getByRole('button', { name: /Finish/i })).toBeInTheDocument();
  });

  test('Click on the button should trigger "next" event', async () => {
    const { emitted } = render(OnBoardingSlide, {
      props: {
        slide: slideMocks[0],
        currentIndex: 1,
        amountOfSlides: 3,
      },
    });

    await fireEvent.click(screen.getByText('Next'));
    expect(emitted()).toHaveProperty('next');
  });
});
