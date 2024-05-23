import { boasVindas } from "../src/ola"; 

test('Criando meu primeiro teste em NodeJS', () => {
  const resultado = boasVindas()
  expect(resultado).toEqual('Olá Mundo')
})