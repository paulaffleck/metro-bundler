/*eslint sort-keys: 0*/
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const siteConfig = {
  title: 'Metro',
  tagline: '🚇 The JavaScript bundler for React Native',
  url: 'https://facebook.github.io',
  baseUrl: '/metro-bundler/',
  projectName: 'metro-bundler',
  repo: 'facebook/metro-bundler',
  editUrl: 'https://github.com/facebook/metro-bundler/edit/master/docs/',
  headerLinks: [
    {doc: 'getting-started', label: 'Docs'},
    {doc: 'api', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
    {languages: true},
    {search: true},
    {href: 'https://github.com/facebook/metro-bundler', label: 'GitHub'},
  ],
  headerIcon: 'img/metro.svg',
  footerIcon: 'img/metro.svg',
  favicon: 'img/favicon/favicon.ico',
  ogImage: 'img/opengraph.png',
  recruitingLink: 'https://crowdin.com/project/metro-bundler',
  algolia: {
    apiKey: process.env.ALGOLIA_METRO_API_KEY,
    indexName: 'metro',
  },
  gaTrackingId: 'UA-44373548-17',
  colors: {
    primaryColor: '#ef4242',
    secondaryColor: '#f96e6e',
    prismColor: 'rgba(153, 66, 79, 0.03)',
  },
};

module.exports = siteConfig;
