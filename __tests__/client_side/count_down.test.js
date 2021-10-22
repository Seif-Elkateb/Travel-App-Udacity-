import {countDown} from '../../src/client/js/count_down.js';

describe('check the functionality of the countdown',()=>{
  test('check if function is defined',()=>{
    expect(countDown).toBeDefined();
  })
});