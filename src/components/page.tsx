import Head from 'next/head';
import { FunctionComponent } from 'react';

type PageProps = {
  children: any;
  title: string;
  description?: string;
};

export const Page: FunctionComponent<PageProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta charSet="UTF-8" />
        {description ? (
          <>
            <meta name="description" property="og:description" content={description} />
          </>
        ) : null}
      </Head>
      <main>{children}</main>
    </>
  );
};
