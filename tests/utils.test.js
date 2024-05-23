import { soma, multiplica } from "../src/utils";

describe('testa as funções do arquivo utils.js', () => {
  describe('testa a função soma', () => {
    test('fornece dois numeros e espera a soma deles', () => {
      const resultado = soma(1, 20)
      expect(resultado).toEqual(21)
    })

    test('fornece uma letra e um numero e espera um erro', () => {
      let resultado

      try {
        soma('1a', 20)
      } catch (erro) {
        resultado = erro.message
      }

      expect(resultado).toEqual('Os parâmetros devem ser um número')
    })
  })

  describe('testa a função multiplicar', () => {
    test('fornece dois numeros e espera a mult. deles', () => {
      const resultado = multiplica(2, 20)
      expect(resultado).toEqual(40)
    })

    test('fornece um numero e um texto e espera um erro', () => {
      let resultado

      try {
        multiplica(2, '20aawdadaw')
      } catch (erro) {
        resultado = erro.message
      }

      expect(resultado).toEqual('Os parâmetros devem ser um número')
    })
  })
})