import dotenv from 'dotenv';

/**
 * Parses root level .env into process.env
 */
dotenv.config();

/**
 * Application constants. Frozen to avoid modificaiton.
 */
export default Object.freeze({
  PORT: process.env.PORT || 8008,
  SOME_OTHER_API_URL: process.env.SOME_OTHER_API_URL || 'http://localhost:3001',
});
