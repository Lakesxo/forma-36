import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Select } from './CompoundSelect';

describe('Select', () => {
  it('should not dispatch onChange if disabled', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const mockOnChange = jest.fn();
    render(
      <Select
        name="optionSelect"
        id="optionSelect"
        onChange={mockOnChange}
        isDisabled
      >
        <Select.Option value="optionOne">Option One</Select.Option>
      </Select>,
    );

    await user.selectOptions(screen.getByTestId('cf-ui-select'), ['optionOne']);
    expect(mockOnChange).not.toHaveBeenCalled();

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should dispatch onChange', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const mockOnChange = jest.fn();
    render(
      <Select name="optionSelect" id="optionSelect" onChange={mockOnChange}>
        <Select.Option value="optionOne">Option One</Select.Option>
      </Select>,
    );

    await user.selectOptions(screen.getByTestId('cf-ui-select'), ['optionOne']);
    expect(mockOnChange).toHaveBeenCalled();

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Select
        id="optionSelect"
        name="optionSelect"
        aria-label="Select"
        defaultValue="optionThree"
      >
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo" isDisabled>
          Disabled option
        </Select.Option>
        <Select.Option value="optionThree">Selected option</Select.Option>
      </Select>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
