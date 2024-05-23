import * as nodeFiles from "fs/promises";
import * as bancoDados from "../src/bancoDados"

jest.mock('fs/promises')

describe('testa as funções do arquivo src/bancoDados.js', () => {
  describe('testa a função moveDados', () => {
    test('', async () => {
      nodeFiles.readFile.mockResolvedValue(JSON.stringify([]))

      const resposta = await bancoDados.moveDados('usuarios.json', 'backupUsuarios.json')

      expect(resposta).toBeTruthy()
      expect(nodeFiles.writeFile.mock.calls[0]).toEqual(['bancoDados/backupUsuarios.json', "[]"])
      expect(nodeFiles.writeFile.mock.calls[1]).toEqual(['bancoDados/usuarios.json', "[]"])
    })

    test('', async () => {
      nodeFiles.readFile.mockRejectedValue(new Error('error test'))

      const resposta = await bancoDados.moveDados('usuarios.json', 'backupUsuarios.json')

      expect(resposta).toBeFalsy()
      expect(nodeFiles.writeFile).not.toHaveBeenCalled()
    })
  })
})