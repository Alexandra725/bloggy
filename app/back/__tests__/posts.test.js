const myApp = require('../app.js')
const supertest = require('supertest')

let request;

beforeAll(async () => {
    const app = await myApp();
    request = supertest(myApp());

});


describe('Testing API with an ADMIN user', ()=> {

    let token = null

    beforeEach((done) => {
        request
            .post('/login')
            .auth('admin@admin.com', '1234')
            .end(function (err, res) {

                token = res.body.user.token;
                console.log(res.body)
                done();
            });
    });
    test('token has been generated', () => {
        expect(token).toBeTruthy();
        expect(token).not.toBeUndefined();
        expect(typeof token).toBe('string');
    });
})