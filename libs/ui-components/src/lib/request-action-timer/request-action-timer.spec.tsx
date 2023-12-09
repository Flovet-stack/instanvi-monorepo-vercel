import { render } from '@testing-library/react';

import RequestActionTimer from './request-action-timer';

describe('RequestActionTimer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RequestActionTimer />);
    expect(baseElement).toBeTruthy();
  });
});
