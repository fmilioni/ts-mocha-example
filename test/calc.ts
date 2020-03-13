import axios from 'axios';
import { expect } from 'chai';

import * as calc from '../src/calc';

describe('Calculator unit tests', () => {
  it('should return the sum of 2 + 3', () => {
    const result = calc.sum(2, 3);
    expect(result).to.equal(5);
  });
});

describe('Calculator API tests', () => {
  it('should return the sum of 2 + 3', async () => {
    const res = await axios.post('http://localhost:3000/sum', {
      x: 2,
      y: 3
    });

    expect(res.status).to.equal(200);
    expect(res.data.res).to.equal(5);
  });
});
