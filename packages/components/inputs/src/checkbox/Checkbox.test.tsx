import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Checkbox } from './Checkbox';

it('renders the component', () => {
  const { container } = render(<Checkbox label="checkbox" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Checkbox label="checkbox" className="my-extra-class" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Checkbox label="checkbox" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
