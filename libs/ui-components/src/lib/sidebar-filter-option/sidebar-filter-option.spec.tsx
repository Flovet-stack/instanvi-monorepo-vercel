import { render } from '@testing-library/react';

import SidebarFilterOption from './sidebar-filter-option';

describe('SidebarFilterOption', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarFilterOption />);
    expect(baseElement).toBeTruthy();
  });
});
