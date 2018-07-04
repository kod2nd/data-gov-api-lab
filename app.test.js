const request = require('supertest')
const { app, errMSG } = require('./app')

test('smoke test', () => {
    expect(1).toEqual(1)
});

test('should return an array with length greater than 0 ', async () => {
    const response = await request(app).get('/hdb');
    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0)
});

test('/hdb/2 should return an array of objects with flat_type 2, denoting 2 room flats', async () => {
    const response = await request(app).get('/hdb/2');
    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].flat_type).toContain("2")
});

test('query yrstart=2000 should return flats with lease_commence_date of >= 2000', async () => {
    const response = await request(app).get('/hdb/3?yrstart=2000');
    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].flat_type).toContain("3");
    expect(Number(response.body[0].lease_commence_date)).toBeGreaterThanOrEqual(2000)
});

test('/hdb/6 should return a 404 error with error message', async () => {
    const response = await request(app).get('/hdb/6');
    expect(response.status).toEqual(404);
});
