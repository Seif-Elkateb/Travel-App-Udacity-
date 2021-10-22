import { getDate } from "../../src/client/js/get_date.js";

describe('testing get date function',()=>{
  test('check if function is defined',()=>{
    expect(getDate).toBeDefined();
  })
  test('check date',()=>{
    const date = new Date("06/30/2019");
    expect(getDate(date)).toBe('2019-06-30')
  })
})