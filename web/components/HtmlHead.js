import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

import '../styles/style.scss';

const HtmlHead = ({
  title, description, url, ogImage,
}) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    { /* Icons */ }
    <link rel="icon" sizes="192x192" href="/static/app-icon.png" />
    <link rel="apple-touch-icon" href="/static/app-icon.png" />
    <link rel="icon" href="/static/favicon.ico" />

    { /* Fonts */ }
    <link rel="stylesheet" href="https://rsms.me/inter/inter-ui.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" />

    { /* OpenGraph */ }
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    { /* Twitter Card */ }
    <meta name="twitter:site" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage} />
  </NextHead>
);

HtmlHead.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

HtmlHead.defaultProps = {
  title: '',
  description: '',
  url: '',
  ogImage: '',
};

export default HtmlHead;
