import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

describe('Select', () => {
  it('renders with label', () => {
    render(
      <Select label="Country">
        <option value="">Select...</option>
        <option value="us">United States</option>
      </Select>
    );
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
    expect(screen.getByText('Select...')).toBeInTheDocument();
    expect(screen.getByText('United States')).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(
      <Select>
        <option value="a">A</option>
      </Select>
    );
    expect(screen.queryByRole('label')).not.toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(
      <Select label="Country" error="Required">
        <option value="">Select...</option>
      </Select>
    );
    expect(screen.getByText('Required')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveClass('border-red-500');
  });

  it('applies custom className', () => {
    render(
      <Select className="custom-class">
        <option value="a">A</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(
      <Select ref={ref}>
        <option value="a">A</option>
      </Select>
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLSelectElement));
  });

  it('handles onChange', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Select onChange={handleChange}>
        <option value="a">A</option>
        <option value="b">B</option>
      </Select>
    );
    await user.selectOptions(screen.getByRole('combobox'), 'b');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('passes native select props', () => {
    render(
      <Select disabled required>
        <option value="a">A</option>
      </Select>
    );
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toBeRequired();
  });
});