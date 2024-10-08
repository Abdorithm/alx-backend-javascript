const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', async () => {
    const result = await getPaymentTokenFromAPI(true);
    expect(result).to.deep.equal({ data: 'Successful response from the API' });
  });

  it('should not return a promise when success is false', () => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});