const request = require('supertest');
const { app, server } = require('../src/server');

describe('Pruebas de integración del servidor', () => {
  afterAll(() => {
    server.close(); // Con esto cierra el servidor al finalizar los tests
  });

  it('Esto debe responder con el mensaje de bienvenida en /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hola desde el servidor de Kevin Benalcazar');
  });
});

