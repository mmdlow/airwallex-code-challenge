import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../utils';
import NotFoundPage from '@/views/404';

describe(NotFoundPage, () => {
  it('should render correctly', async () => {
    render(<NotFoundPage />);

    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });
});
