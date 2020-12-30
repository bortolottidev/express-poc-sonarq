const request =  require('supertest')
const server =  require('../bin/www')

describe('Endpoints Checks', () => {
    it('Get Home page', async (done) => {
        const res =  await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        done();
    });

    it('Get Users list', async (done) => {
        const res =  await request(server).get('/users');
        expect(res.statusCode).toEqual(200);
        done();
    })
});

afterAll(async  done  => {
    server.close();
    done();
});