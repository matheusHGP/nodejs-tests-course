export function soma(num1, num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    throw new Error('Os parâmetros devem ser um número')
  }

  return Number(num1) + Number(num2)
}

export function multiplica(num1, num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    throw new Error('Os parâmetros devem ser um número')
  }

  return Number(num1) * Number(num2)
}