import { render } from '@testing-library/react';

import ContollerInput from './contoller-input';

describe('ContollerInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContollerInput />);
    expect(baseElement).toBeTruthy();
  });
});
