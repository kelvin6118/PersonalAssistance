describe('Create task endpoints', () => {
    let api;

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    })

    const dummyTask = {
        type: 'task',
        userid: 8,
        title: 'A title',
        description: 'A description',
        date: '2022-10-28'
    }

    it('should return 201 when task successfully created', async () => {
        const res = await request(api)
            .post('/create')
            .send(
                dummyTask
            )
        expect(res.statusCode).toEqual(201);
    })

    it('should return 422 when userid does not exist', async () => {
        const res = await request(api)
            .post('/create')
            .send(
                {
                    ...dummyTask,
                    userid: 99999
                }
            )
        expect(res.statusCode).toEqual(422);
    })

    it('should return 422 when title is null', async () => {
        const res = await request(api)
            .post('/create')
            .send(
                {
                    ...dummyTask,
                    title: null
                }
            )
        expect(res.statusCode).toEqual(422);
    })

    it('should return 422 when date is null', async () => {
        const res = await request(api)
            .post('/create')
            .send(
                {
                    ...dummyTask,
                    date: null
                }
            )
        expect(res.statusCode).toEqual(422);
    })

})

describe('Create Event endpoints', () => {
    let api;

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    })

    const dummyEvent = {
        type: 'event',
        userid: 8,
        title: 'A title',
        description: 'A description',
        date: '2022-10-28',
        time: '05:00:00'
    }

    it('should return 201 when Event successfully created', async () => {
        const res = await request(api)
            .post('/create')
            .send(
                dummyEvent
            )
        expect(res.statusCode).toEqual(201);
    })

    it('should return 422 when userid does not exist', async () => {
        const res = await request(api)
            .post('/create')
            .send(
                {
                    ...dummyEvent,
                    userid: 99999
                }
            )
        expect(res.statusCode).toEqual(422);
    })

    it('should return 422 when title is null', async () => {
        const res = await request(api)
            .post('/create')
            .send(
                {
                    ...dummyEvent,
                    title: null
                }
            )
        expect(res.statusCode).toEqual(422);
    })

    it('should return 422 when date is null', async () => {
        const res = await request(api)
            .post('/create')
            .send(
                {
                    ...dummyEvent,
                    date: null
                }
            )
        expect(res.statusCode).toEqual(422);
    })

})
