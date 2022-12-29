import React from 'react';
import { Layout } from '../components/global/Layout.server';
import HomePage from './homepage';

const index = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default index;
