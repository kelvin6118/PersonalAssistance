describe('User endpoints', () => {
    let api;

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    })

    it('should return status 200 when searching for an existed user', async () => {
        const res = await request(api).get('/task/8');
        expect(res.statusCode).toEqual(200);
    })

    it('should return status 500 when searching for a non valid id', async () => {
        const res = await request(api).get('/task/e');
        expect(res.statusCode).toEqual(500);
    })

})
