import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { HeaderComponents } from './index';

test('HeaderComponents', () => {
  render(<HeaderComponents />);
  expect(screen.getByText('Header')).toBeInTheDocument();
});
