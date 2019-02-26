import { getSomethingFromSomewhere } from '../samples';

describe('Sample controllers', () => {
  it('> getSomethingFromSomewhere should invoke response.json with a payload', () => {
    const response = {
      json: jest.fn(),
    };

    getSomethingFromSomewhere({}, response);

    expect(response.json.mock.calls.length).toBe(1); // called response.json once
    expect(response.json.mock.calls[0][0])
      .toEqual({ succcess: true }); // this is our response payload
  });
});
