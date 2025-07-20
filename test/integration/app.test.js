/**
 * @fileoverview Tests de integración para el servidor WebFlix
 * @requires supertest
 * @requires ../../app
 */

const request = require('supertest');
const app = require('../../app');

/**
 * @description Suite de pruebas de integración para la API de WebFlix
 */
describe('Pruebas de integración para la API de WebFlix', () => {
  describe('GET /', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...originalEnv };
    });

    afterAll(() => {
      process.env = originalEnv;
    });

    /**
     * @test Verifica la integración del endpoint cuando SECRET_KEY está configurada
     * @returns {Promise<void>}
     */
    it('debería devolver mensaje de bienvenida cuando SECRET_KEY está presente', async () => {
      process.env.SECRET_KEY = 'test-key';
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.text).toBe('Bienvenido a WebFlix, tu servidor de videos');
    });

    /**
     * @test Verifica la integración del endpoint cuando SECRET_KEY no está configurada
     * @returns {Promise<void>}
     */
    it('debería devolver mensaje de acceso denegado cuando SECRET_KEY no está presente', async () => {
      delete process.env.SECRET_KEY;
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.text).toBe('No tienes acceso a nuestra web no cocnoces la clave secreta');
    });
  });
});
