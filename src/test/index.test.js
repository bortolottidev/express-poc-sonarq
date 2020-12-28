const request =  require('supertest')
const server =  require('../bin/www')

describe('Get Endpoints', () => {
    it('Get Home page', async (done) => {
        const res =  await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        done();
    })
});

afterAll(async  done  => {
    server.close();
    done();
});