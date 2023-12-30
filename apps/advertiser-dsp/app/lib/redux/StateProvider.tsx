'use client';

/* Core */
import { Provider } from 'react-redux';
import { store } from './store';

export const StateProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
