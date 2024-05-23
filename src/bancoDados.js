import * as nodeFiles from "fs/promises";

export async function recuperaDados(arquivo) {
  const dados = await nodeFiles.readFile(`bancoDados/${arquivo}`, { encoding: 'utf-8' })
  return JSON.parse(dados)
}

export async function escreveDados(arquivo, dados) {
  await nodeFiles.writeFile(`bancoDados/${arquivo}`, JSON.stringify(dados, null, 2))
  return true
}

export async function moveDados(arquivo, novoArquivo) {
  try {
    const dados = await recuperaDados(arquivo)
    await escreveDados(novoArquivo, dados)
    await escreveDados(arquivo, [])
    return true
  } catch (erro) {
    return false
  }
}