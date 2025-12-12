const createApp = require('../src/app');

describe('app routes (using native fetch)', () => {
  let server;
  let url;

  beforeAll((done) => {
    const app = createApp();
    server = app.listen(0, () => {
      const port = server.address().port;
      url = `http://127.0.0.1:${port}`;
      done();
    });
  });

  afterAll((done) => { server.close(done); });

  test('GET /health returns status ok', async () => {
    const res = await fetch(`${url}/health`);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ status: 'ok' });
  });

  test('POST /echo echoes body', async () => {
    const payload = { message: 'hello' };
    const res = await fetch(`${url}/echo`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ echo: payload });
  });
});
