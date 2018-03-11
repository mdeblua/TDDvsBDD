describe('suite de testes de adição', () => {

    var calculadora = require('../../src/js/calculadora.js')

    it('deve retornar 5 para 2 e 3', () => {
        expect(calculadora.somar(2, 3)).toEqual(5);
    });

    it('deve retornar -3 para -9 e 6', () => {
        expect(calculadora.somar(-9, 6)).toEqual(-3);
    });

    it('deve retornar -10 para -5 e -5', () => {
        expect(calculadora.somar(-5, -5)).toEqual(-10);
    });

    it('deve retornar 0 para 5 e -5', () => {
        expect(calculadora.somar(5, -5)).toEqual(0);
    });

    it('deve retornar 0 para -5 e 5', () => {
        expect(calculadora.somar(-5, 5)).toEqual(0);
    });

    it('deve retornar 0 para -30 e 10', () => {
        expect(calculadora.somar(-30, 10)).toEqual(-20);
    });

    it('deve retornar 0 para -10 e 30', () => {
        expect(calculadora.somar(-10, 30)).toEqual(20);
    });

    it('deve retornar 6 para 9 e -3 no formato texto', () => {
        expect(calculadora.somar('9', '-3')).toEqual(6);
    });

    it('deve retornar 2.5 para 1.25 e 1.25', () => {
        expect(calculadora.somar(1.25, 1.25)).toEqual(2.5);
    });

    it('deve retornar 2.5 para 1.25 e 1.25 no formato texto', () => {
        expect(calculadora.somar('1.25', '1.25')).toEqual(2.5);
    });

    it('deve retornar 2.5 para 1.25 e 1.25 no formato texto (parcial)', () => {
        expect(calculadora.somar('1.25', 1.25)).toEqual(2.5);
    });

    it('deve retornar excecao quando o primeiro parametro for nulo', () => {
        expect(() => { calculadora.somar(null, 10) }).toThrow();
        expect(() => { calculadora.somar(null, 10) }).toThrowError('parametros nao podem ser nulo');        
    });

    it('deve retornar excecao quando nao for 1 numero no primeiro ou segundo parametros', () => {
        expect(() => { calculadora.somar(undefined, 10) }).toThrowError('parametro devem ser numeros');        
        expect(() => { calculadora.somar(10, undefined) }).toThrowError('parametro devem ser numeros');        
    });







});