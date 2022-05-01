import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import CustomInput from './CustomInput.vue';

describe.skip('CustomInput.vue', () => {
  test('should render', () => {
    const { container } = render(CustomInput);

    expect(
      screen.getByRole('heading', { name: /CustomInput/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
