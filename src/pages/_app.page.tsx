import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from '@/app-container';
import { store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AppContainer>
  );
}
