/**
 * Service layer functions.
 */

import debug from 'debug';
import fetch from 'node-fetch';

import config from '../config';

const log = debug('app:services:someApi');

/**
 * Service function for some external API
 * @param {string} id - Id of some external resource
 * @returns {Promise<Object>} - Promise from node-fetch
 */
export const getSomethingFromSomeApi = (id) => {
  log('Getting something from an external api...');

  /**
   * Returning a promise right now, but in reality you would return something like:
   *
   * return fetch(`${config.SOME_OTHER_API_URL}/${id}`).then(res => res.json());
   */
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: 'Brodey', id }), 1000);
  });
};
