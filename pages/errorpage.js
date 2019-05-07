import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import Main from '../compositions/main';

const ErrorPage = () => (
  <Main>
    <h1>404 - Not Found</h1>
    <h1>This page does not exist.</h1>
  </Main>
);

export default ErrorPage;