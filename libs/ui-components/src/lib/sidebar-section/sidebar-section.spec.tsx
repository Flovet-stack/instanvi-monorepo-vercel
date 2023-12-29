import { render } from '@testing-library/react';

import SidebarSection from './sidebar-section';

describe('SidebarSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarSection />);
    expect(baseElement).toBeTruthy();
  });
});
