import { render } from '@testing-library/react';

import ApplicationHeader from './application-header';

describe('ApplicationHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApplicationHeader />);
    expect(baseElement).toBeTruthy();
  });
});
