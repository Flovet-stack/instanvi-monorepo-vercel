import { render } from '@testing-library/react';

import EmailReset from './email-reset';

describe('EmailReset', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmailReset />);
    expect(baseElement).toBeTruthy();
  });
});
