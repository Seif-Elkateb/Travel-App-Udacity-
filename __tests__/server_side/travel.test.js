import '@babel/polyfill';
const app = require('../../src/server/server.js'); 
const supertest = require('supertest')
const request = supertest(app)

describe('check server functionality',()=>{

  test('check test route',async ()=>{
    const response=await request.get('/test');
    expect(response.body.message).toBe('hello world');
    
  })
  // the geonames api return countryName property for the location searched for 
  // i used this propety is returned along with the weather data and images in the final response
  // because i know the value of this propety already i used it for test the endpoints
  test('check test country of cairo is egypt (returned by the geonames api ',async ()=>{
     await request.post('/senddata').send({location:'cairo',future:1})
     const response = await request.get('/getdata');
     expect(response.body.countryName).toBe('Egypt');
  })

})