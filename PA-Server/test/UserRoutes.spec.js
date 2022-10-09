describe('User endpoints', () => {
    let api;

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    })

    it('should return status 200 when going to user root', async () => {
        const res = await request(api).get('/user');
        expect(res.statusCode).toEqual(200);
    })

    it('should return 200 when user successfully login', async () => {
        const res = await request(api)
            .post('/user/login')
            .send(
                {
                    username: 'kelvin6118',
                    password: 'abccba123'
                }
            )
        expect(res.statusCode).toEqual(200);
    })

    it('should return 401 when user fail to login', async () => {
        const res = await request(api)
            .post('/user/login')
            .send(
                {
                    username: 'kelvin',
                    password: '124314'
                }
            )
        expect(res.statusCode).toEqual(401);
    })

})
