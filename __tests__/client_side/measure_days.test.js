import { measureDays } from "../../src/client/js/measure_days.js";

describe('test measureDays function',()=>{
  test('check if function is defined',()=>{
    expect(measureDays).toBeDefined();
  })
  test('check if Number of days between 20/9/2021 and 22/9/2021 is 2',()=>{
    const date1= new Date("09/20/2021");
    const date2= new Date("09/22/2021");
    expect(measureDays(date1,date2)).toBe(2);
  } )
})