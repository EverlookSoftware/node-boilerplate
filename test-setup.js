// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require('jest-fetch-mock');

jest.setMock('node-fetch', fetch);
