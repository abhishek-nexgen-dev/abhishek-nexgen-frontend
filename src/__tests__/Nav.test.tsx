import Nav from '@/components/ui/Nav';
import { render } from '@testing-library/react';

describe('Nav Component', () => {
  it('renders the navigation bar without crashing', () => {
    expect(() => render(<Nav />)).not.toThrow();
  });
});
