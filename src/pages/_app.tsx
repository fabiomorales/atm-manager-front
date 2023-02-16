import { ErrorBoundary } from 'components/error-boundary';
import { Modal } from 'components/molecules';
import { UnexpectedError } from 'components/unexpected-error';
import { AtmListProvider } from 'contexts/atms/AtmsProvider';
import { AuthProvider } from 'contexts/auth/AuthProvider';
import { ModalProvider } from 'contexts/modal/ModalProvider';
import { ViewportProvider } from 'hooks/useViewport';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<UnexpectedError />}>
      <Head key="head-app">
        <title>ATM</title>
        <link rel="apple-touch-icon" href="shortcut.ico" />
      </Head>
      <GlobalStyle />
      <ModalProvider>
        <AuthProvider>
          <AtmListProvider>
            <ViewportProvider>
              <Component {...pageProps} />
              <Modal />
            </ViewportProvider>
          </AtmListProvider>
        </AuthProvider>
      </ModalProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
