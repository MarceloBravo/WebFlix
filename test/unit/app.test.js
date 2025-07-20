/**
 * @fileoverview Tests unitarios para el servidor WebFlix
 * @requires supertest
 * @requires ../../app
 */

const request = require('supertest');
const app = require('../../app');

/**
 * @description Suite de pruebas para el endpoint principal
 */
describe('Tests para el endpoint /', () => {
  /** @type {NodeJS.ProcessEnv} Almacena el estado original de las variables de entorno */
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  /**
   * @test Verifica que se muestre el mensaje de bienvenida cuando SECRET_KEY está configurada
   * @returns {Promise<void>}
   */
  test('debe retornar mensaje de bienvenida cuando SECRET_KEY está presente', async () => {
    process.env.SECRET_KEY = 'test-key';
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Bienvenido a WebFlix, tu servidor de videos');
  });

  /**
   * @test Verifica que se muestre el mensaje de acceso denegado cuando SECRET_KEY no está configurada
   * @returns {Promise<void>}
   */
  test('debe retornar mensaje de acceso denegado cuando SECRET_KEY no está presente', async () => {
    delete process.env.SECRET_KEY;
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('No tienes acceso a nuestra web no cocnoces la clave secreta');
  });
});