import '@babel/polyfill';
const app = require('../../src/server/server.js'); 
const supertest = require('supertest')
const request = supertest(app)

describe('check server functionality ',()=>{

  test('check test route',async ()=>{
    const response=await request.get('/test');
    expect(response.body.message).toBe('hello world');
    
  })

  test('check the getdata route on express server ',async ()=>{
     const response = await request.get('/getdata');
     expect(response.status).toBe(200)
  })
})
