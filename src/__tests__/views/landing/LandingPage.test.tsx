import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../utils';
import userEvent from '@testing-library/user-event';
import LandingPage from '../../../views/landing/LandingPage';

describe(LandingPage, () => {
  it('should trigger the RequestInviteDialog when button is clicked', async () => {
    render(<LandingPage />);

    expect(screen.getByText('A better way')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Request an invite'));
    expect(screen.getByText('Full name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Confirm email')).toBeInTheDocument();
  });
});
