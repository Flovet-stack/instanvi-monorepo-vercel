import { render } from '@testing-library/react';

import PhoneReset from './phone-reset';

describe('PhoneReset', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneReset />);
    expect(baseElement).toBeTruthy();
  });
});
