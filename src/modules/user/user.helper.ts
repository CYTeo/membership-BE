import * as crypto from 'crypto';

function generateSecretKey(length: number = 32): string {
  return crypto.randomBytes(length).toString('hex');
}

// Example usage in an Express.js application
const secretKey = generateSecretKey();

module.exports = {
  secretKey: secretKey,
};
