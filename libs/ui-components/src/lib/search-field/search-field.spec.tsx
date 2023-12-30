import { render } from '@testing-library/react';

import SearchField from './search-field';

describe('SearchField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchField />);
    expect(baseElement).toBeTruthy();
  });
});
