import React, { Component } from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../lib/withData';


interface Props {
    apollo: any
}
class MyApp extends App<Props> {

  static async getInitialProps({Component, ctx}: {Component: any, ctx: any}) {
      let pageProps: any = {};
      if(Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
      }
      pageProps.query = ctx.query;
  
    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
        <ApolloProvider client={apollo}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
  }
}

export default withData(MyApp)