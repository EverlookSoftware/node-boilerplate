/**
 * Business logic exists in here
 */

import _ from 'lodash';
import debug from 'debug';

import { getSomethingFromSomeApi } from '../services/someApi';

const log = debug('app:controllers:sample');

/**
 * Gets something from somehwere...
 * @param {Object} request - request object from Express
 * @param {Object} response - response object from Express
 * @returns {Object} - response object
 */
export const getSomethingFromSomewhere = (request, response) => {
  log('Getting something...');

  return response.json({ succcess: true });
};

/**
 * Gets something from somehwere...
 * @param {Object} request - request object from Express
 * @param {Object} response - response object from Express
 * @returns {Promise<{ success }>} - response object
 */
export const postSomethingToSomewhere = (request, response) => {
  log('Posting somehwere...', request.body);

  return response.json({ succcess: true });
};

/**
 * Gets something from somehwere...
 * @param {Object} request - request object from Express
 * @param {Object} response - response object from Express
 * @returns {Promise<{ success, data }>} - response object
 */
export const getSomethingWithId = async (request, response) => {
  const id = _.get(request, 'params.id');

  const data = await getSomethingFromSomeApi(id);

  return response.json({ succes: true, data });
};
