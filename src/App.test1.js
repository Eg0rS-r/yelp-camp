import { render } from './test-utils';
import App from './App';

it('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
	expect.toMatchSnapshot()
});
