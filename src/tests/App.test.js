import { render, screen, waitFor } from '@testing-library/react';
import App from '../App.tsx';
import users from './test-users.json'

beforeEach(() => {
  global.fetch = jest.fn()
})

afterEach(() => {
  jest.resetAllMocks()
})

test('includes input element', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Search.../i)
  expect(input).toBeInTheDocument();
});

test('get all data', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => users })
  render(<App />)

  await waitFor(() => {
      const list = screen.getAllByTestId(/list-item/);
      expect(list).toHaveLength(200)
    })
})

test('get data by search term', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => users })
  render(<App />)
  const input = screen.getByPlaceholderText(/Search.../i)
  input.value = 'illo'
  input.dispatchEvent(new Event('input'))
  
  await waitFor(() => {
    const el = screen.getAllByText(/illo/)
    expect(el).toHaveLength(5);
  })
})

test('error message', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => users })
  render(<App />)
  const input = screen.getByPlaceholderText(/Search.../i)
  input.value = 'test123'
  input.dispatchEvent(new Event('input'))

  await waitFor(() => {
    const errorEl = screen.getByTestId(/error-message/)
    expect(errorEl).toBeInTheDocument()
  })
})