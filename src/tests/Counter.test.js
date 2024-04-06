import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const msg = screen.getByText('Counter');
  expect(msg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const msg = screen.getByText('0');
  expect(msg).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  const count = screen.getByTestId('count').textContent;
  await userEvent.click(screen.getByText('+'));
  const newCount = screen.getByTestId('count').textContent;
  expect((count + 1).toString()).toMatch(newCount);
});

test('clicking - decrements the count', async () => {
  const count = screen.getByTestId('count').textContent;
  await userEvent.click(screen.getByText('-'));
  const newCount = screen.getByTestId('count').textContent;
  expect(newCount).toMatch((count - 1).toString());
});

