import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/vue';
import CustomButton from './CustomButton.vue';

describe('CustomButton.vue', () => {
  test('should render', () => {
    const { container } = render(CustomButton, {
      props: {
        text: 'Lorem ipsum',
      },
    });

    expect(
      screen.getByRole('button', { name: /Lorem ipsum/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should call the function passed when click on the button', async () => {
    const mockFunction = vi.fn();
    render(CustomButton, {
      props: {
        text: 'Lorem ipsum',
        onClick: mockFunction,
      },
    });

    await fireEvent.click(screen.getByText('Lorem ipsum'));
    expect(mockFunction).toHaveBeenCalledOnce();
  });
});
