import { render } from '@testing-library/react';

import SectionComponent from './section-component';

describe('SectionComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionComponent />);
    expect(baseElement).toBeTruthy();
  });
});
