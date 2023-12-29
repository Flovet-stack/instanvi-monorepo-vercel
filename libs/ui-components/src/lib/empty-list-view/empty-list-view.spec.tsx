import { render } from '@testing-library/react';

import EmptyListView from './empty-list-view';

describe('EmptyListView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmptyListView />);
    expect(baseElement).toBeTruthy();
  });
});
