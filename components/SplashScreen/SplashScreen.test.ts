import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
// import {mount} from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import SplashScreen from './SplashScreen.vue';

describe('SplashScreen.vue', () => {
  test('should render', () => {
    render(SplashScreen);

    expect(
      screen.getByRole('heading', { name: 'Hello world' })
    ).toBeInTheDocument();
  });
});
