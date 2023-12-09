import { render } from '@testing-library/react';

import OtpPage from './otp-page';

describe('OtpPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OtpPage />);
    expect(baseElement).toBeTruthy();
  });
});
