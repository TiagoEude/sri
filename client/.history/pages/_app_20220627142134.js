import React from "react";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
class SRIApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default SRIApp;
